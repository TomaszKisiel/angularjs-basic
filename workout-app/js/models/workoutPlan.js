function WorkoutPlan( { exercises = [], title, restBetweenExercise } ) {
    this.title = title
    this.exercises = exercises

    this.totalWorkoutDuration = function () {
        if ( this.exercises.length === 0 ) return 0

        return this.exercises.reduce( ( total, exercise ) => {
            return total + exercise.duration
        }, 0 )
    }
}
