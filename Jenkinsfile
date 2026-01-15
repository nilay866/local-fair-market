pipeline {
  agent any

  stages {
    stage('Deploy Frontend') {
      steps {
        sh '''
        ssh ubuntu@13.201.61.191 << 'EOF'
          set -e
          cd ~/app || mkdir -p ~/app && cd ~/app
          if [ ! -d frontend ]; then
            git clonehttps://github.com/nilay866/local-fair-market.git .
          else
            git pull
          fi
          cd frontend
          docker rm -f frontend || true
          docker build -t frontend:latest .
          docker run -d --name frontend -p 80:80 frontend:latest
        EOF
        '''
      }
    }
  }
}
