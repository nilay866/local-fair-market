pipeline {
    agent any

    stages {
        stage('Deploy Frontend') {
            steps {
                sh """
                ssh -o StrictHostKeyChecking=no ubuntu@13.201.61.191 << 'EOF'
                    set -e
                    mkdir -p /home/ubuntu/app
                    cd /home/ubuntu/app

                    if [ -d "local-fair-market" ]; then
                        cd local-fair-market
                        git pull origin main
                    else
                        git clone https://github.com/nilay866/local-fair-market.git
                        cd local-fair-market
                    fi

                    npm install
                    npm run build
                EOF
                """
            }
        }
    }
}
