var scoreboard = function() {
    
    // private
    var results = [];
    
    function addResult(newResult) {
        results.push(newResult);
    }
    
    function updateScoreboard() {
        
        var output = '';
        
        for (var index = 0; index < results.length; index++) {
            var result = results[index];
            output += result.name + ' - Scored ' + result.score + ' out of ' + result.problems + ' for factor ' + result.factor + '<br/>';
        }
        
        var scoresElement = document.getElementById('scores');
        scoresElement.innerHTML = output;
    }
    
    // public
    return {
        addResult: addResult,
        updateScoreboard: updateScoreboard
    }
    
}();