pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
//          # Make sure dependencies are installed
          sh 'npm install'
//          # Build the image
          sh 'npm run build'
      }
    }
    stage('Deploy') {
      when {
        branch "master"
      }
      steps {
//          # Remove the old files
          sh 'rm -rf /var/www/mainsitestaging/public_html/*'
//          # Copy over the new files
          sh 'cp -r build/* /var/www/mainsitestaging/public_html/'
      }
    }
  }
}
