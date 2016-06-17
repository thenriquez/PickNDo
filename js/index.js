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
    if ($scope.newTaskDate == null ||
      $scope.newTaskDate == '') {

      }
}
}
