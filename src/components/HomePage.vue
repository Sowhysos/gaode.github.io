<template>
    <div id="cesiumContainer"></div>
</template>
  
<script>
import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

export default {
    data() {
        return {
            viewer: null, // 存放3D地球对象
            tileset: null // 存放3D Tileset对象
        };
    },
    methods: {
        // 加载3D Tileset并绘制到3D地球上
        async loadTileset() {
            try {
                Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkM2JiNzFjZi05YzI5LTQwOTMtYTBmNS01MWUwNDJmNDkwNmMiLCJpZCI6MTg2MzgzLCJpYXQiOjE3MDgzMjE1Mjh9.256pTxrITG2qcyLv80WoUmwLDxe4i9pBTma7OVECRN0'
                const tileset = await Cesium.Cesium3DTileset.fromIonAssetId(2465114);
                this.viewer.scene.primitives.add(tileset);
                await this.viewer.zoomTo(tileset);

                // Apply the default style if it exists
                const extras = tileset.asset.extras;
                if (
                    Cesium.defined(extras) &&
                    Cesium.defined(extras.ion) &&
                    Cesium.defined(extras.ion.defaultStyle)
                ) {
                    tileset.style = new Cesium.Cesium3DTileStyle(extras.ion.defaultStyle);
                }

                this.tileset = tileset;
            } catch (error) {
                console.error("Error loading tileset:", error);
            }
        }
    },
    mounted() {
        this.viewer = new Cesium.Viewer("cesiumContainer", {
            sceneMode: Cesium.SceneMode.SCENE3D,
            animation: false,
            timeline: false,
            // vrButton: false,
            // scene3DOnly: true,
            // selectionIndicator: false,
        });

        this.loadTileset(); // 加载3D Tileset并绘制到3D地球上
    },
};
</script>
  
<style scoped>
#cesiumContainer {
    widows: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    /* overflow: hidden; */
}
</style>
