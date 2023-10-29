pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                git 'https://github.com/bach-long/recruitApp.git'
                dir('be') {
                    sh 'composer install --ignore-platform-reqs'
                    sh 'cp .env.example .env'
                    sh 'php artisan key:generate'
                }
            }
        }
        stage('Check Convention') {
            steps {
                // Sử dụng công cụ Pint để kiểm tra convention
                dir('be') {
                    sh './vendor/bin/pint --test'
                }
            }
        }
        stage('Unit Test Laravel') {
            steps {
                // Sử dụng công cụ Pint để kiểm tra convention
                dir('be') {
                    sh 'php artisan test'
                }
            }
        }
        // stage('Test Lint React') {
        //     steps {
        //         // Sử dụng công cụ Pint để kiểm tra convention
        //         dir('fe') {
        //             sh 'npm install'
        //             sh 'npx eslint src'
        //         }
        //     }
        // }
    }

    post {
        always {
            cleanWs()
        }
        success {
            // Hành động sau khi pipeline chạy thành công
            echo 'Pipeline ran successfully!'
        }
        failure {
            // Hành động sau khi pipeline thất bại
            echo 'Pipeline failed!'
        }
    }
}
