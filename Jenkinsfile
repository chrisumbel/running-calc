
node("docker") {
    def buildDocker = docker.image('node:4.8.3');    

    stage("pull images") {
        buildDocker.pull();
    }

    stage("pull source") {
        git url: 'https://github.com/chrisumbel/running-calc.git', branch:'dev', credentialsId: 'chrisumbel-bot';        
    }

    
    buildDocker.inside() {
        stage("test") {
            sh 'npm instal -g jasmine-node'
            sh 'jasmine-node spec/*.js'
        }
    }
    
    stage("publish") {
         withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'chrisumbel-bot', usernameVariable: 'GIT_USERNAME', passwordVariable: 'GIT_PASSWORD']]) {
            sh 'git checkout master'
            sh 'git merge dev'
            sh 'git push https://${GIT_USERNAME}:${GIT_PASSWORD}@github.com:/chrisumbel/running-calc.git'
        }    
    }
}