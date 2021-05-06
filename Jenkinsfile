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
					sh 'npm install'
					sh 'npm run e2e_mochawesome'
					zip zipFile: 'Report-' + currentBuild.number + '.zip', dir: 'mochawesome-report'
               		archiveArtifacts artifacts: 'Report-' + currentBuild.number + '.zip'												
				}
			}
		}
		stage('Evaluate results') {
			sh 'echo Evaluating results - see archived file for details'
			def results = readJSON file: 'cypress-sample-project/mochawesome-report/output.json'
			def testSuitsCount = results.stats.suites
			def testsCount = results.stats.tests
			def failedTestsCount = results.stats.failures
			echo 'Test stats: '
			echo "'Test Suites: $testSuitsCount'"
			echo "'Tests: $testsCount'"
			echo "'Failed tests: $failedTestsCount'"
			if (failedTestsCount > 0) {
				sh 'exit 1'
			}
			sh 'exit 0'
		}
	}
}