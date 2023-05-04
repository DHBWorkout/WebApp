pipeline {
    agent any
    stages {
        stage('Checkout Service') {
            steps {
                script {
                    // The below will clone your repo and will be checked out to master branch by default.
                    git branch: 'master', credentialsId: 'GitHub-DerFrZocker-Read-DHBWorkout', url: "https://github.com/DHBWorkout/WebApp.git"
                    // Do a ls -lart to view all the files are cloned. It will be clonned. This is just for you to be sure about it.
                    sh "ls -lart ./*"
                    // List all branches in your repo.
                    sh "git branch -a"
                    // Checkout to a specific branch in your repo.
                    sh "git checkout master"
                }
            }
        }

        stage('Build Image') {
            /* This builds the actual image; synonymous to
             * docker build on the command line */
            steps {
                script {
                    app = docker.build("dhbworkout/webapp", ".")
                }
            }
        }

        stage('Push Image') {
            steps {
                script {
                    /* Finally, we'll push the image with two tags:
                     * First, the incremental build number from Jenkins
                     * Second, the 'latest' tag.
                     * Pushing multiple tags is cheap, as all the layers are reused. */
                    docker.withRegistry('http://10.22.100.20:9005', 'Nexus-DerFrZocker-de-Upload-Reading') {
                        app.push("${env.BUILD_NUMBER}")
                        app.push("latest")
                    }
                }
            }
        }

        stage('Run Test') {

                    steps {
                        script {
                            sh "docker run -d --restart=always --network=dhbworkout --ip=10.24.102.15 -v dhbworkout-webapp-test-results:/app/test-report --name=dhbworkout-test 10.22.100.20:9005/dhbworkout/webapp -sh test.sh"
                        }
                    }
                    post {
                        always {
                            script {
                                if (fileExists('dhbworkout-webapp-test-results')) {
                                    junit 'dhbworkout-webapp-test-results/*.xml'
                                }
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