pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/JasonZhLiang/bc-docs.git', branch: 'develop', changelog: true)
      }
    }

    stage('') {
      steps {
        sh 'ls -la'
      }
    }

  }
}