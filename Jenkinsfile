pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/JasonZhLiang/bc-docs.git', branch: 'develop', changelog: true)
      }
    }

    stage('Log') {
      steps {
        sh 'ls -la'
      }
    }

  }
}