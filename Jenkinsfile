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
                sh "aws configure set region $AWS_DEFAULT_REGION"
                sh "aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID"
                sh "aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY"
                sh "aws s3 cp ${WORKSPACE}/build/ s3://jifri-sample-project/ --recursive"
            }
        }
    }
}
