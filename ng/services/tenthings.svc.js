angular.module('app').service('TenThingsSvc', function ($http) {
	var svc = this;

	svc.getQueue = function () {
		return $http.get(`/bots/tenthings/queue`);
	};

	svc.getLists = function (user) {
		return $http.get(`/api/tenthings/lists`);
	};

	svc.getCategories = () => {
		return $http.get(`/api/tenthings/categories`);
	};

	svc.getLanguages = () => {
		return $http.get(`/api/tenthings/languages`);
	};

	svc.getList = function (list) {
		return $http.get('/api/tenthings/lists/' + list._id);
	};

	svc.saveList = function (user, list) {
		return $http.put('/api/tenthings/lists', {
			user: user,
			list: list,
		});
	};

	svc.reportList = function (user, list) {
		$http.get('/api/tenthings/lists/' + list._id + '/report/' + user._id);
	};

	svc.deleteList = function (list) {
		return $http.delete('/api/tenthings/lists/' + list._id);
	};

	svc.getMoviePics = function (list) {
		return $http.get(`/api/tenthings/lists/${list._id}/movies`);
	};

	svc.getTVPics = function (list) {
		return $http.get(`/api/tenthings/lists/${list._id}/tv`);
	};

	svc.getActorPics = function (list) {
		return $http.get(`/api/tenthings/lists/${list._id}/actors`);
	};

	svc.getBookPics = function (list) {
		return $http.get(`/api/tenthings/lists/${list._id}/books`);
	};

	svc.getMusicVideos = function (list) {
		return $http.get(`/api/tenthings/lists/${list._id}/musicvideos`);
	};

	svc.getPics = function (list) {
		return $http.get(`/api/tenthings/lists/${list._id}/pics`);
	};

	svc.getPause = function () {
		return $http.get(`/api/tenthings/pause`);
	};

	svc.togglePause = function () {
		return $http.post(`/api/tenthings/pause`);
	};

	svc.getGame = function (id) {
		return $http.get(`/api/tenthings/game/${id}`);
	};
});
