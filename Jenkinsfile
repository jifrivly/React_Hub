pipeline {
    agent any
    environment {
        AWS_ACCESS_KEY_ID = 'ASIAZ3QV5LVWS6RUZXBO'
        AWS_SECRET_ACCESS_KEY = 'CZOSpKXcAji03Pji107w5qBHLWLRg9tQjRXbzb9Q'
        AWS_SESSION_TOKEN = 'IQoJb3JpZ2luX2VjEL3//////////wEaCXVzLWVhc3QtMSJGMEQCIDdaCB6aiPIxYWhEEVe17VV4yDtJSeWhIV+TO6XXiTsZAiBOLnGqF7HxuG3bVhG5oQLfdiAUANtMQyI+lM926ENQNSrDAwhWEAAaDDY3NzU3NzA1NTU5NyIMhfIbF3vgVECWAVlSKqADV7swJpZWTqk5KkET1EBBNHqXbRDHtfXcsK/oQhXF6fycjuQUyG+LUl2BXR94FqAjkPJR+1dPeTInVEU9KgD7bEI9zeNHr1ucG/FtL8eU9G2i7PzXZ2iWxnwX8WWS9LYgvTgaxPk+OOgwd9GaSqubKVbcbE8nKwkn6B/NrpxMzojut+MyBAEsXXN3qm3r7P9xID8PAuBQqWZ7uM0pfZTpVUW8TbGUvlq+TbCzdwFFgGGnF5xNF5HRbYEtUQ42lx8Uu2lX48OyyKJU/vobRXuiFAsxTB515zp2kkBGcmLxQDxGjlqeJdKubtC58n7X3syXLmJ43XR9HfA7782pzjx1ocf6vx5j7NWpewaEDhJ6Js1bZVNFIbaZ5WI7dgVBf9aKF2JFZxD5QoT3jnF5haWsCSskSU/wYuuX9tIb2ZxZAJWmx/mL+Eo2N21oJDGAMdQWjjPsEgaAR0hHh3cRCKmaeIx2vZbRFxyz1o5z/MsURflxFpY7msGrSGDtdYrY4DRCtpEkGyV1YD2r8f0M2Ms0jB/P+Y+tsKTVXwP1qzriCR4w4pK8nwY6pwFzl8E7FSr3OxuQXPqZuGGOR56OtiktNvH0Km39AsjwkLC4Ys8Jj+Sc9c5mg7axlFNCXAHh64h0PqlwS11OlKLd/vRpZ/Sq7y1Cmh+ZH8YbY27FS6z9CuzHeIeZCZJmGpHWRxxh67VAUaxcJVE+3aFLe1mTquWOZA5LZDvj8RWXt//dkSJuWOWXukGxdkB563noCPtqlvL22pMFEcE7DzFa2QgYj5OfDQ=='
    }
    stages {
        stage('Build') {
            steps {
                nodejs('NodeJS 16.15.0') {
                    sh 'npm i'
                    sh 'npm run build'
                }
            }
        }
        stage('Deploy') {
            steps {
                sh "aws s3 cp ${WORKSPACE}/build/ s3://jifri-sample-project/ --recursive"
            }
        }
    }
}
