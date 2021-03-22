angular.module( "workout" )
    .controller( "WorkoutController", [ "$scope", "$interval", function ( $scope, $interval ) {

        const startWorkout = () => {
            $scope.workoutPlan = createWorkoutPlan()
            $scope.workoutCurrentDuration = 0
            $scope.workoutTotalDuration = $scope.workoutPlan.totalWorkoutDuration()

            $interval( () => {
                $scope.workoutCurrentDuration += 0.1
            }, 100, $scope.workoutTotalDuration * 10 + 1 )

            startExercise( $scope.workoutPlan.exercises.shift() )
        }

        const startExercise = ( exercise ) => {
            $scope.currentExercise = exercise
            $scope.currentExerciseTimeLeft = exercise.duration
            $interval( () => {
                $scope.currentExerciseTimeLeft -= 1
            }, 1000, $scope.currentExerciseTimeLeft ).then( () => {
                const next = $scope.workoutPlan.exercises.shift()
                if ( next ) {
                    startExercise( next )
                } else {
                    // end :3
                }
            } )
        }

        const createWorkoutPlan = () => {
            const plan = new WorkoutPlan( {
                title: "Trening dla początkujących",
                restBetweenExercise: 10
            } )

            plan.exercises.push( new Exercise( {
                title: "Jumping Jacks",
                description: "A jumping jack or star jump, also called side-straddle hop is a physical jumping exercise.",
                hints: "Assume an erect position, with feet together and arms at your side.\
                        Slightly bend your knees, and propel yourself a few inches into the air.\
                        While in air, bring your legs out to the side about shoulder width or slightly wider.\
                        As you are moving your legs outward, you should raise your arms up over your head; arms should be slightly bent throughout the entire in-air movement.\
                        Your feet should land shoulder width or wider as your hands meet above your head with arms slightly bent",
                videos: [ "//www.youtube.com/embed/iSSAk4XCsRA", "//www.youtube.com/embed/c4DAnQ6DtF8" ],
                image: "/static/img_1.png",
                duration: 30,
            } ) )
            plan.exercises.push( createRestExercise() )
            plan.exercises.push( new Exercise( {
                title: "Wall Sit",
                description: "A wall sit, also known as a Roman Chair, is an exercise done to strengthen the quadriceps muscles.",
                hints: "Place your back against a wall with your feet shoulder width apart and a little ways out from the wall.\
                              Then, keeping your back against the wall, lower your hips until your knees form right angles. ",
                videos: [ "//www.youtube.com/embed/y-wV4Venusw", "//www.youtube.com/embed/MMV3v4ap4ro" ],
                image: "/static/img_1.png",
                duration: 30
            } ) )
            plan.exercises.push( createRestExercise() )
            plan.exercises.push( new Exercise( {
                title: "Push Up",
                description: "A push-up is a common exercise performed in a prone position by raising and lowering the body using the arms",
                hints: "Lie prone on the ground with hands placed as wide or slightly wider than shoulder width. \
                              Keeping the body straight, lower body to the ground by bending arms at the elbows. \
                              Raise body up off the ground by extending the arms.",
                videos: [ "//www.youtube.com/embed/Eh00_rniF8E", "//www.youtube.com/embed/ZWdBqFLNljc" ],
                image: "/static/img_1.png",
                duration: 30
            } ) )
            plan.exercises.push( createRestExercise() )
            plan.exercises.push( new Exercise( {
                title: "Abdominal Crunches",
                description: "The basic crunch is a abdominal exercise in a strength-training program.",
                hints: "Lie on your back with your knees bent and feet flat on the floor, hip-width apart.\
                              Place your hands behind your head so your thumbs are behind your ears.\
                              Hold your elbows out to the sides but rounded slightly in.\
                              Gently pull your abdominals inward.\
                              Curl up and forward so that your head, neck, and shoulder blades lift off the floor.\
                              Hold for a moment at the top of the movement and then lower slowly back down.",
                videos: [ "//www.youtube.com/embed/Xyd_fa5zoEU", "//www.youtube.com/embed/MKmrqcoCZ-M" ],
                image: "/static/img_1.png",
                duration: 30
            } ) )

            return plan
        }

        const createRestExercise = () => {
            return new Exercise( {
                title: "Relax",
                description: "Relax a bit!",
                hints: "The most important thing in any training session is good rest, which allows your muscles to recover. Take a break. Breathe deeply!",
                videos: [ "//www.youtube.com/embed/acUZdGd_3Dg" ],
                image: "/static/img_2.png",
                duration: 10,
            } )
        }

        const init = () => {
            startWorkout()
        }

        init()
    } ] )
