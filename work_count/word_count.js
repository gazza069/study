var fs = require('fs');
var completedTasks = 0;
var tasks = [];
var wordCounts = {};
var fileDir = './text';

function checkIfComplete() {
    completeTasks++;
    if(completesTasks == tasks.length) {
        for(var index in wordCounts) {
            console.log(index +': ' + wordCount[index]);
        }
    }
}