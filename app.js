new Vue({
	el: '#tasks',

	data:{
		tasks:[
			{ body: "Learn Vue.js", completed: false }
		], 

		newTask: ''
	},

	computed: {

		completions: function(){
			return this.tasks.filter(function(task){
				return task.completed;
			})
		},

		remaining: function(){
			return this.tasks.filter(function(task){
				return ! task.completed;
			})
		}
	},


	filters: {
		inProcess: function(tasks){
			return tasks.filter(function(task){
				return ! task.completed;
			});
		}

	},

	methods: {

		addTask: function(e){
			e.preventDefault();

			if(! this.newTask) return;

			this.tasks.push({
				body: this.newTask,
				completed: false
			});

			this.newTask ='';
			
		},



		removeTask: function(task){

			this.tasks.$remove(task);
		},



		editTask: function(task){

			this.removeTask(task);
			this.newTask = task.body;
			this.$$newTask.focus();
		},

		completeTask: function(task){
			task.completed = true;
		},

		unCompleteTask: function(task){
			task.completed = false;
		},

		completeAll: function(){
			this.tasks.forEach(function(task){
				task.completed = true;
			})
		},

		clearComplete: function(){
			this.tasks = this.tasks.filter(function(task){
				return ! task.completed;
			})
		}



	}

	
})