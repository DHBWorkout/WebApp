pipeline {
    agent any
    options {
        disableConcurrentBuilds()
        disableResume()
    }
    triggers {
        githubPush()
    }
    stages {
        stage('Checkout Service') {
            steps {
                script {
                    checkout scmGit(branches: [[name: '*/master']], userRemoteConfigs: [[credentialsId: 'GitHub-DerFrZocker-Read-DHBWorkout', url: 'https://github.com/DHBWorkout/WebApp.git']])
                }
            }
        }

        stage('Build Image') {
            steps {
                script {
                    app = docker.build("dhbworkout/webapp", ".")
                }
            }
        }

        stage('Run Test') {
            agent {
                docker {
                    args '--network=dhbworkout --ip=10.24.102.16 --name=dhbworkout-test --shm-size=1gb'
                    image 'node:19'
                    reuseNode true
                }
            }
            steps {
                script {
                    // Copied from Dockerfile
                    sh 'npm install -g serve'
                    sh 'npm ci'

                    sh 'sh test.sh'

                    recordCoverage( id: 'tests', name: 'Tests', tools: [[parser: 'JUNIT', pattern: 'test-results/results.xml']])
                }
            }
        }

        stage('Push Image') {
            steps {
                script {
                    docker.withRegistry('http://10.22.100.20:9005', 'Nexus-DerFrZocker-de-Upload-Reading') {
                        app.push("${env.BUILD_NUMBER}")
                        app.push("latest")
                    }
                }
            }
        }


        stage('Run Container') {
            steps {
                script {
                    // Poor mans run version
                    try {
                        sh "docker stop dhbworkout-webapp"
                        sh "docker rm dhbworkout-webapp"
                    } catch (err) {
                        echo err.getMessage()
                    }

                    sh "docker run -d --restart=always --network=dhbworkout --ip=10.24.102.15 --name=dhbworkout-webapp 10.22.100.20:9005/dhbworkout/webapp"
                }
            }
        }
    }
}

