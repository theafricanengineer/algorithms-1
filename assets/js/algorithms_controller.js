var app = angular.module('algorithm', []);

app.controller('CppFeaturesController', ['$scope', function($scope) {
  $scope.cppFeatures = [
    {
      'title': 'C++ Vector: A pretty simple guide',
      'hasMediumPost': true,
      'mediumPostUrl': 'https://medium.com/@leandrotk_/c-standard-template-library-stl-vector-a-pretty-simple-guide-d2b64184d50b#.5aquqmuns',
      'hasGithubCode': true,
      'githubCodeUrl': 'https://github.com/LeandroTk/algorithms/blob/master/competitive_programming/data_structures/vectors.cpp',
      'studied': true
    },

    {
      'title': 'C++ String: A pretty simple guide',
      'hasMediumPost': true,
      'mediumPostUrl': 'https://medium.com/@leandrotk_/c-string-a-pretty-simple-guide-dadb4acea190#.j2t3w2vks',
      'hasGithubCode': true,
      'githubCodeUrl': 'https://github.com/LeandroTk/algorithms/blob/master/competitive_programming/data_structures/strings.cpp',
      'studied': true
    },

    {
      'title': 'C++ Map: A pretty simple guide',
      'hasMediumPost': false,
      'mediumPostUrl': '',
      'hasGithubCode': true,
      'githubCodeUrl': 'https://github.com/LeandroTk/algorithms/blob/master/competitive_programming/data_structures/maps.cpp',
      'studied': false
    },

    {
      'title': 'C++ Sorting: A pretty simple guide',
      'hasMediumPost': false,
      'mediumPostUrl': '',
      'hasGithubCode': false,
      'githubCodeUrl': '',
      'studied': false
    },
  ];
}]);

app.controller('AlgorithmsController', ['$scope', function($scope) {
  $scope.algorithms = [
    {
      'title': 'Bubble Sort',
      'hasMediumPost': false,
      'mediumPostUrl': '',
      'hasGithubCode': false,
      'githubCodeUrl': 'https://github.com/LeandroTk/algorithms/blob/master/computer_science/algorithms/sorting/bubble_sort/bubble_sort.py',
      'studied': true
    },

    {
      'title': 'Insertion Sort',
      'hasMediumPost': false,
      'mediumPostUrl': '',
      'hasGithubCode': false,
      'githubCodeUrl': '',
      'studied': true
    },

    {
      'title': 'Selection Sort',
      'hasMediumPost': false,
      'mediumPostUrl': '',
      'hasGithubCode': false,
      'githubCodeUrl': '',
      'studied': true
    },

    {
      'title': 'Merge Sort',
      'hasMediumPost': false,
      'mediumPostUrl': '',
      'hasGithubCode': false,
      'githubCodeUrl': '',
      'studied': true
    },
  ];
}]);

app.controller('DataStructuresController', ['$scope', function($scope) {
  $scope.dataStructures = [
    {
      'title': 'Trees',
      'hasMediumPost': true,
      'mediumPostUrl': 'https://medium.freecodecamp.org/all-you-need-to-know-about-tree-data-structures-bceacb85490c',
      'hasGithubCode': true,
      'githubCodeUrl': 'https://github.com/LeandroTk/algorithms/tree/master/computer_science/data_structures/binary_search_tree',
      'studied': true
    }
  ];
}]);
