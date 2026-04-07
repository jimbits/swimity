<!-- src/routes/test/+page.svelte -->
<script lang="ts">
	import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();

  const { user, userData } = data;
  const plan = userData?.training_plan;
  const profile = userData?.profile;
  const workouts = plan?.workouts ? Object.values(plan.workouts) : [];



</script>




<div class="page">
  <section class="profile">
    <h1>{profile?.name}</h1>
    <p>{user.email}</p>
  </section>

  <section class="plan">
    <h2>{plan?.plan_name}</h2>
    <p>Started: {plan?.start_date}</p>
    <p>Weeks completed: {plan?.weeks_completed}</p>
  </section>

  <section class="workouts">
    <h2>Workouts</h2>
    {#each workouts as workout}
      <div class="workout-card" class:done={workout.completed}>
        <h3>{workout.day} — {workout.type}</h3>
        <p>{workout.completed ? '✅ Completed' : '⏳ Pending'}</p>
        <ul>
          {#each Object.values(workout.exercises) as exercise}
            <li>{exercise.name} — {exercise.sets} x {exercise.reps} @ {exercise.weight_kg}kg</li>
          {/each}
        </ul>
      </div>
    {/each}
  </section>

</div>

<style>
  .page {
    max-width: 600px;
    margin: 2rem auto;
    padding: 1rem;
    color: white;
    background: #1c1410;
    min-height: 100dvh;
  }
  .plan, .workouts { margin-top: 2rem; }
  .workout-card {
    border: 1px solid #444;
    padding: 1rem;
    margin-top: 1rem;
    border-radius: 6px;
  }
  .workout-card.done { border-color: limegreen; }


</style>
