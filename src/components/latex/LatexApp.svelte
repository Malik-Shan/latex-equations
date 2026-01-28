<script lang="ts">
  import Editor from "./Editor.svelte";
  import Preview from "./Preview.svelte";
  import CustomSnippets from './CustomSnippets.svelte';
  import SymbolPicker from "./SymbolPicker.svelte";
  import Toolbar from "./Toolbar.svelte";
</script>

<div class="grid gap-4 md:grid-cols-2">
  <div class="card bg-base-100 shadow">
    <div class="card-body gap-4">
      <div class="flex items-center justify-between">
        <h2 class="card-title">Build</h2>
        <div class="badge badge-outline">Click-to-insert</div>
      </div>

      <Toolbar />
      <SymbolPicker />
    </div>
  </div>
  
  <div class="card bg-base-100 shadow">
    <div class="card-body gap-4">
      <h2 class="card-title">Preview</h2>
      <Preview />
      <Editor />
      <CustomSnippets />
    </div>
  </div>
</div>