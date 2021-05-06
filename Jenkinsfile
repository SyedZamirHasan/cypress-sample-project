pipeline {
	
    agent any
	
	triggers {
        pollSCM('10 * * * *')
    }
	
    stages {
		
		stage('Clone Git') {
			steps {
				checkout scm
			}
		}
		
		stage('Smoke Test') {
			sh 'echo "Starting e2e Testing"'
			steps {
				script{
					docker.image('zamirhasan/cypress-cucumber-image').inside {						
						dir ("cypress-tests") {
							sh 'npm install'
							sh 'npm run e2e_mochawesome'
							zip zipFile: 'Report-' + currentBuild.number + '.zip', dir: 'mochawesome-report'
               						archiveArtifacts artifacts: 'Report-' + currentBuild.number + '.zip'
										
						}						
					}
				}
			}
			
		}
		
	}
}
