var app = angular .module ('PickNDo', []);



app.controller('taskController' , function($scope) {
$scope.today = new Date();
$scope.saved = localStorage.getItem('taskItems');
$scope.taskItem =
(localStorage.getItem('taskItems')!==null) ?
JSON.parse($scope.saved) : [{descripton:"Why Not ADD a task?", date: $scope.today, complete: flase}];
localStorage.setItem('taskItems',
JSON.stringify($scope.taskItem));

$scope.newTask = null;
$scope.newTaskDate = null;
$scope.categories = [
  {name: 'Personal'},
  {name: 'Work'}
  {name:  'School'}
  {name: 'Cleaning'}
  {name: 'Family'}
];
$scope.newTaskCategory = $scope.categories;
    $scope.addNew = function () {
        if ($scope.newTaskDate == null || $scope.newTaskDate == '') {
            $scope.taskItem.push({
                description: $scope.newTask,
                date: "No deadline",
                complete: false,
                category: $scope.newTaskCategory.name
            })
        } else {
            $scope.taskItem.push({
                description: $scope.newTask,
                date: $scope.newTaskDate,
                complete: false,
                category: $scope.newTaskCategory.name
            })
        };

        $scope.newTask = '';
        $scope.newTaskDate = '';
        $scope.newTaskCategory = $scope.categories;
        localStorage.setItem('taskitems',
        JSON.stringify($scope.taskItem))
      };
      $scope.deleteTask = function () {
        var completedTask = $scope.taskItem;
        $scope.taskItem = [];
        angular.forEach(completedTask, function (taskItem) {
            if (!taskItem.complete) {
                $scope.taskItem.push(taskItem);
            }
        });
        localStorage.setItem('taskItems', JSON.stringify($scope.taskItem));
    };

    $scope.save = function () {
        localStorage.setItem('taskItems', JSON.stringify($scope.taskItem));
    }
});
