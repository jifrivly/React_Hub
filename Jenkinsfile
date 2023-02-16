pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                nodejs('NodeJS 16.15.0') {
                    sh "npm i"
                    sh "npm run build"
                }
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo rm -rf /var/www/jenkins-react-app"
                sh "sudo cp -r ${WORKSPACE}/build/ /var/www/jenkins-react-app/"
            }
        }
    }
}