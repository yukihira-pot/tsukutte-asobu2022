<template>
  <div class="bluescreen" @click="$emit('change-mode', 'endAngry')">
    <p>
      A problem has been detected and windows has been shut down to prevent
      damage to your computer.<br />
    </p>
    <br />
    <p>The end-user manually generated the crashdump.<br /></p>

    <p>
      If this is the first time you've seen this stop error screen, restart your
      computer. If this screen appears again, follow these steps:<br />
    </p>

    <p>
      Check to make sure any new hardware or software is properly installed.<br />
      If this is a new installation, ask your hardware or software manufacturer
      for any windows updates you might need.<br />
    </p>

    <p>
      If problems continue, disable or remove any newly installed hardware or
      software. Disable BIOS memory options such as caching or shadowing.<br />
      If you need to use Safe Mode t remove or disable components, restart your
      computer, press F8 to select Advanced Startup Option, and then select Safe
      Mode.<br />
    </p>

    <p>Technical information:<br /></p>

    <p>
      *** STOP: 0x000000E2 (0x00000000,0x00000000,0x00000000,0x00000000)<br />
    </p>
    <br />
    <br />
    <p>
      Collecting data for crash dump ...<br />
      Initializing disk for crash dump ...<br />
      Beginning dump of physical memory.<br />
      Dumping physical memory to disk: 30<br />
    </p>
  </div>
</template>

<style scoped>
.bluescreen {
  background-color: darkblue;
  width: 100vw;
  height: 100vh;
  color: white;
  font-family: 'Courier New', Consolas, monospace;
  font-weight: 100;
  font-size: 120%;
}
</style>
