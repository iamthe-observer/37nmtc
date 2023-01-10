<template>
  <Renderer
    :antialias="true"
    :orbit-ctrl="true"
    :resize="'window'"
    class="w-full h-screen"
    ref="renderer"
  >
    <Camera :position="{ z: 10 }" />
    <Scene :background="'#ff0000'">
      <PointLight :position="{ y: 50, z: 50 }" />
      <AmbientLight :color="'#a020f0'" />
      <Box ref="box" :on-pointer-over="handle" :rotation="{ y: 10, x: 10 }">
        <LambertMaterial />
      </Box>
    </Scene>
  </Renderer>
</template>

<script setup lang="ts">
import {
  Box,
  Camera,
  LambertMaterial,
  PointLight,
  Renderer,
  Scene,
  AmbientLight,
  FbxModel,
} from 'troisjs'
import { onMounted, ref } from 'vue'

const handle = (e: any) => {
  console.log(e)
}
const renderer = ref()
const box = ref()
onMounted(() => {
  console.log(renderer.value)

  renderer.value.onBeforeRender(() => {
    box.value.mesh.rotation.x += 0.03
    box.value.mesh.rotation.y += 0.08
    box.value.mesh.rotation.z += 0.05
  })
})
</script>
