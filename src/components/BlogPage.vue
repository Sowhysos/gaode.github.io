<template>
  <div id="container">
    <div id='top'>
      <input v-model="inputVal" placeholder="关键字搜索" id="searchInput" style="width:200px">
      <button class="button" v-show="Tflag" @click="changeTflag">周边搜索</button>
      <button class="button" @click="navigate" v-show="flag">路线规划</button>
      <button class="button" v-show="stationFlag" @click="stationFlag = !stationFlag">公交站点查询</button>
      <button class="button" v-show="!stationFlag" @click="stationCancel">取消</button>

      <button class="button" @click="fetchData" v-if="listFlag">景点分布</button>
      <button class="button" @click="cancelList" v-if="!listFlag">取消</button>

      <button class="button" @click="glFlag = !glFlag" v-show="glFlag">进淄赶"烤"</button>
      <div id="image-viewer" v-show="!glFlag" class="image-viewer">
        <button @click="closeViewer" class="close-button">关闭</button>
        <div class="image-container" :style="backgroundImageStyle"></div>
        <div class="controls">
          <button @click="prevImage" class="button">上一张</button>
          <button @click="nextImage" class="button">下一张</button>
        </div>
      </div>
      <!-- 两点测距 -->
      <div class="input-card" style="width:20rem;background-color:transparent;box-shadow:none">
        <div class="input-item">
          <input v-show="LcomFlag" @click="LenCommute" type="button" class="btn" id='customCe' value="两点测距" />
          <input v-show="!LcomFlag" @click="cancelLenCommute" type="button" class="btn" id='customCa' value="取消" />
        </div>
      </div>

      <div v-if="weatherInfo" class="weatherPanel"
        :style="{ position: 'absolute', right: '700px', top: '0px', zIndex: 100, background: 'white', padding: '10px', borderRadius: '5px', boxShadow: '0 2px 6px rgba(0,0,0,.3)', width: panelWidth, height: panelHeight }">
        <div v-if="panelState === 'expanded'"> <!-- 添加条件，只有在窗体展开时才显示文字信息 -->
          <h4>{{ weatherInfo.liveInfo.title }}</h4>
          <hr />
          <div v-html="weatherInfo.liveInfo.content"></div>
          <h4>{{ weatherInfo.forecastInfo.title }}</h4>
          <hr />
          <div v-html="weatherInfo.forecastInfo.content"></div>
        </div>
        <button @click="togglePanelSize">{{ panelState === 'expanded' ? '缩小窗体' : '实时天气' }}</button>
      </div>

      <!-- 展示旅游景点信息窗体 -->
      <div id="infobox" v-if="!listFlag">
        <ul>
          <li class="poi-box" v-for="(feature, index) in features" :key="index"
            @click="highlightFeature(feature, index)">
            <div class="info-left">
              <h3>{{ feature.properties.FID }}. {{ feature.properties.Name }}</h3>
              <div>
                类别：{{ feature.properties.stars }} <br> 门票：<span style="color: red;">{{ feature.properties.ticket
                  }}</span><br>
                {{ feature.properties.address }}
              </div>
            </div>
            <div class="img-right">
              <img :src="feature.properties.url" :alt="feature.properties.Name" class="full-width-img">
            </div>
          </li>
        </ul>
      </div>
      <div class="custom-info-box" v-if="showCustomInfoBox" :style="infoBoxStyle">
        <div class="info-label">{{ infoMessage }}</div>
        <div class="info-label">地址：{{ infoadress }}</div>
        <button @click="goToDestination(SedMarker)">到这去</button>
        <button @click="hideCustomInfoBox">取消</button>
      </div>
      <!-- 站点提示查询窗口 -->
      <div v-show="!stationFlag" id="tip" class='info' style='min-width:18rem;'></div>

      <div v-show="!stationFlag" class="input-card" style='width:18rem;'>
        <label style='color:grey'>公交站点查询</label>
        <div class="input-item">
          <div class="input-item-prepend"><span class="input-item-text">站名关键字</span></div>
          <input id='stationKeyWord' type="text" value='淄博北站'>
        </div>
        <input id="search" type="button" class="btn" value="查询" @click="stationSearch" />
      </div>

      <!-- 半径搜索 -->
      <form id="formT" v-show="!Tflag">
        <label for="poiType">选择服务类型:</label>
        <input type="text" v-model="poiType"><br>

        <label for="radius">选择搜索半径（米）：</label>
        <input type="number" v-model.number="radius" min="100" max="1000" step="100"><br>

        <button type='button' @click="seCenter">设置搜索中心</button>
        <button type='button' @click="Nearby">确定</button>
        <button type='button' @click="cancel">取消</button>
      </form>
      <div id="panel"></div>
      <div id="nav" v-show="!flag">
        <label for="startPoint">起始点：</label>
        <input v-model="startIn" type="text" id="startPoint">

        <label for="endPoint">结束点：</label>
        <input type="text" id="endPoint" v-model="endIn">

        <button @click="byPass">添加途径点</button>

        <button @click="planRoute">开始导航</button>
        <button @click="end">退出</button>
      </div>
    </div>
  </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader'; // 引入
window._AMapSecurityConfig = {
  securityJsCode: 'f9872e80f8244734ad79699673509aa1', // 安全密钥
}
export default {
  data() {
    return {
      map: null,
      inputVal: '',
      autoOptions: {
        input: 'searchInput' // searchInput输入框的id
      },
      placeSearch: null,
      CenterSearch: null,
      auto: null,
      way: [], // 存储导航的途径点
      marker: null,
      startIn: '',
      endIn: '',
      waypoint: [],// 坐标数据小容器
      markers: [],
      flag: true,
      clickHandler: null,
      stationFlag: true,
      LcomFlag: true,
      Tflag: true,
      glFlag: true,
      autoOptionStart: {
        input: 'startPoint', // searchInput输入框的id
      },
      autoOptionEnd: {
        input: 'endPoint',
      },
      placeSearch: null,
      autoS: null,
      autoE: null,
      adcode: '0533',
      startNavi: {
        lng: null,
        lat: null
      },
      endNavi: {
        lng: null,
        lat: null
      },
      driving: null,
      opts: {
        waypoints: []
      },
      geojson: null,
      poiType: '',
      radius: null,
      Chandler: null, // 选取中心点时的函数
      CP: [], // 存储中心点的数组
      stations: [],
      text: null,
      line: null,
      images: [
        require('@/assets/image/1.jpeg'),
        require('@/assets/image/2.jpeg'),
        require('@/assets/image/3.jpeg'),
        require('@/assets/image/4.jpeg'),
        require('@/assets/image/5.jpeg'),
        require('@/assets/image/6.jpeg'),
        require('@/assets/image/7.jpeg'),
      ],
      currentImageIndex: 0, // 当前显示的图片索引
      infoWindow: null, // 添加信息窗体实例
      features: [],
      attPoints: [],
      listFlag: true, // 景点列表
      weatherInfo: null,
      panelState: 'expanded', // 默认状态为展开
      panelWidth: 'auto', // 窗体宽度
      panelHeight: 'auto', // 窗体高度
      Cmarker: null,
      showInfoWindowFlag: false, // 控制信息窗口显示的标记
      SedMarker: null,// 信息窗口传递参数用
      showCustomInfoBox: false, // 控制自定义信息框的显示
      infoMessage: '', // 信息标签的内容
      infoadress:'', // 信息标签另加的地址信息
      infoBoxStyle: {} // 自定义信息框的样式
    }
  },
  mounted() {
    this.initMap()
  },
  computed: {
    backgroundImageStyle() {
      return {
        'background-image': `url(${this.images[this.currentImageIndex]})`,
        'background-size': 'contain',
        'background-repeat': 'no-repeat',
        'background-position': 'center center',
      };
    },
  },
  methods: {
    // 初始化地图
    initMap() {
      AMapLoader.load({
        key: "a964a826994771bd958ef94e1466973e",        // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0",      // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ['AMap.ToolBar', 'AMap.Scale', 'AMap.HawkEye', 'AMap.MapType', 'AMap.AutoComplete', 'AMap.ControlBar',
          'AMap.PlaceSearch', 'AMap.GeoJSON', 'AMap.Driving', 'AMap.StationSearch', 'AMap.Weather', 'AMap.MouseTool'],       // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      }).then((AMap) => {
        this.map = new AMap.Map("container", {  //设置地图容器id
          viewMode: "3D",    //是否为3D地图模式
          zoom: 18,           //初始化地图级别
          center: [118.06230631, 36.80192789], //初始化地图中心点位置
          pitch: 50,
        });
        this.map.addControl(new AMap.Scale())
        this.map.addControl(new AMap.ToolBar({
          position: {
            bottom: '50px',
            left: '1px'
          }
        }))
        this.map.addControl(new AMap.MapType({
          position: {
            top: '200px',
            left: '100px'
          }
        }));
        this.map.addControl(new AMap.ControlBar({
          position: {
            bottom: '35px',
            left: '150px'
          }
        }));
        this.map.addControl(new AMap.HawkEye())
        this.geojson = new AMap.GeoJSON({
          geoJSON: null,
        })

        this.infoWindow = new AMap.InfoWindow({ offset: new AMap.Pixel(-15, -50) });

        //  初始化驾车策略
        this.driving = new AMap.Driving({
          map: this.map,
          panel: "panel",
          // 驾车策略
          policy: AMap.DrivingPolicy.LEAST_TIME,
        })
        this.auto = new AMap.AutoComplete(this.autoOptions) // AutoComplete提示插件
        this.autoS = new AMap.AutoComplete(this.autoOptionStart) // AutoComplete提示插件
        this.autoE = new AMap.AutoComplete(this.autoOptionEnd)// 加载另一个AutoComplete提示插件

        this.placeSearch = new AMap.PlaceSearch({ // 搜索插件
          map: this.map,
          city: "0533", // 兴趣点城市
          citylimit: true,  //是否强制限制在设置的城市内搜索
        })

        // 设置中心搜索 实例
        this.CenterSearch = new AMap.PlaceSearch({
          //type: this.poiType, // 兴趣点类别
          pageSize: 5, // 单页显示结果条数
          pageIndex: 1, // 页码
          city: this.adcode, // 兴趣点城市
          citylimit: true,  //是否强制限制在设置的城市内搜索
          map: this.map, // 展现结果的地图实例
          panel: "panel", // 结果列表将在此容器中进行展示。
          autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
        });

        // 绑定select事件
        this.autoS.on('select', this.startSelect)
        this.autoE.on('select', this.endSelect)
        // 绑定select事件
        this.auto.on('select', this.select)

        this.addWeatherInfo();

      }).catch(e => {
        console.log(e);
      })
    },
    select(e) {
      this.placeSearch.setCity(this.adcode)
      this.placeSearch.search(e.poi.name)
    },
    startSelect(e) {
      this.placeSearch.setCity(this.adcode)
      this.placeSearch.search(e.poi.name)
      this.startNavi.lat = e.poi.location.lat
      this.startNavi.lng = e.poi.location.lng
    },
    endSelect(e) {
      this.placeSearch.setCity(this.adcode)
      this.placeSearch.search(e.poi.name)
      this.endNavi.lat = e.poi.location.lat
      this.endNavi.lng = e.poi.location.lng
    },
    navigate() {
      this.flag = false
    },
    byPass() {
      this.clickHandler = (e) => {
        this.marker = new AMap.Marker({
          map: this.map,
          icon: '',
          position: e.lnglat,
          anchor: "bottom-center",
        }); // 在点击处添加标记
        this.geojson.addOverlay(this.marker)// 将marker存入json
        this.markers.push(this.marker)

        this.way.push(e.lnglat);
        this.marker.on('rightclick', (e) => {
          const index = this.markers.indexOf(this.marker);
          this.geojson.removeOverlay(this.marker); // 从geojson中移除
          this.map.remove(this.marker); // 从地图上移除
          this.markers.splice(index, 1); // 从 markers 数组中删除
        });
        console.log(e.lnglat);
      }
      this.map.on('click', this.clickHandler)
    },
    planRoute() {
      this.geojson.eachOverlay((item) => {
        this.opts.waypoints.push(item.getPosition())
      })
      this.driving.search(new AMap.LngLat(this.startNavi.lng, this.startNavi.lat),
        new AMap.LngLat(this.endNavi.lng, this.endNavi.lat), this.opts,
        function (status, result) {
          if (status === 'complete') {
            console.log('success');
          } else {
            console.log('false');
          }
        })
    },
    end() {
      this.flag = true
      this.map.off("click", this.clickHandler);
      this.clearMarkers();
    },
    clearMarkers() {
      this.markers.forEach(marker => {
        marker.setMap(null);
      });
      this.markers = [];
      this.way = []; // 清空途径点
      this.opts.waypoints = []; // 清空驾车策略的途经点
      this.driving.clear(); // 清空驾车路线
    },
    changeTflag() {
      this.Tflag = !this.Tflag
    },
    cancel() {
      if (this.CP.length !== 0) {
        this.map.remove(this.marker); // 移除之前的标记
        this.CP.splice(0, 1); // 清空之前的坐标数据
      }
      this.CenterSearch.clear(); // 清除地图上的搜索结果
      this.Tflag = !this.Tflag
    },
    seCenter() {
      this.Chandler = (e) => {
        if (this.CP.length !== 0) {
          this.map.remove(this.marker); // 移除之前的标记
          this.CP.splice(0, 2); // 清空之前的坐标数据
        }
        this.marker = new AMap.Marker({
          map: this.map,
          icon: '',
          position: e.lnglat,
          anchor: "bottom-center",
        });
        this.CP.push(e.lnglat.lng); // 保存事件点处的坐标数据
        this.CP.push(e.lnglat.lat)
      };
      this.map.on('click', this.Chandler);
    },
    Nearby() {
      // console.log(this.CP);
      this.CenterSearch.searchNearBy(this.poiType, this.CP, this.radius, function (status, result) {

      });

    },
    stationSearch() {
      this.map.remove(this.stations);
      var stationKeyWord = document.getElementById('stationKeyWord').value
      if (!stationKeyWord) return
      //实例化公交站点查询类
      var station = new AMap.StationSearch({
        pageIndex: 1, //页码
        pageSize: 60, //单页显示结果条数
        city: this.adcode   //确定搜索城市
      });
      station.search(stationKeyWord, (status, result) => {
        if (status === 'complete' && result.info === 'OK') {
          this.stationSearchCallBack(result);
        } else {
          document.getElementById('tip').innerHTML = JSON.stringify(result);
        }
      });
    },
    stationSearchCallBack(searchResult) {
      var stationArr = searchResult.stationInfo;
      var searchNum = stationArr.length;
      if (searchNum > 0) {
        document.getElementById('tip').innerHTML = '查询结果：共' + searchNum + '个相关站点';
        for (var i = 0; i < searchNum; i++) {
          var marker = new AMap.Marker({
            icon: new AMap.Icon({
              image: '//a.amap.com/jsapi_demos/static/resource/img/pin.png',
              size: new AMap.Size(32, 32),
              imageSize: new AMap.Size(32, 32),
              imageOffset: new AMap.Pixel(0, 0)
            }),
            offset: new AMap.Pixel(-16, -32),
            position: stationArr[i].location,
            map: this.map,
            title: stationArr[i].name
          });
          marker.info = new AMap.InfoWindow({
            content: stationArr[i].name,
            offset: new AMap.Pixel(0, -30)
          });
          marker.on('mouseover', function (e) {
            e.target.info.open(this.map, e.target.getPosition())
          })
          this.stations.push(marker);
        }
        this.map.setFitView();
      }
    },
    stationCancel() {
      this.stationFlag = !this.stationFlag
      this.map.remove(this.stations);
    },
    LenCommute() {
      this.LcomFlag = !this.LcomFlag
      var m1 = new AMap.Marker({
        map: this.map,
        draggable: true,
        position: new AMap.LngLat(118.06230631, 36.80192789)
      });
      var m2 = new AMap.Marker({
        map: this.map,
        draggable: true,
        position: new AMap.LngLat(118.06240641, 36.80192789)
      });

      this.line = new AMap.Polyline({
        map: this.map,
        strokeColor: '#80d8ff',
        isOutline: true,
        outlineColor: 'white',
        path: [m1.getPosition(), m2.getPosition()]
      });

      this.text = new AMap.Text({
        map: this.map,
        text: '',
        style: {
          'backgroundColor': '#29b6f6',
          'borderColor': '#e1f5fe',
          'fontSize': '12px'
        }
      });

      this.markers.push(m1, m2);
      this.computeDis(m1, m2);
      m1.on('dragging', () => this.computeDis(m1, m2));
      m2.on('dragging', () => this.computeDis(m1, m2));
    },
    computeDis(m1, m2) {
      var p1 = m1.getPosition();
      var p2 = m2.getPosition();
      var textPos = new AMap.LngLat((p1.getLng() + p2.getLng()) / 2, (p1.getLat() + p2.getLat()) / 2);
      var distance = Math.round(p1.distance(p2));
      var path = [p1, p2];
      this.line.setPath(path);
      this.text.setText('两点相距' + distance + '米');
      this.text.setPosition(textPos);
    },
    cancelLenCommute() {
      this.LcomFlag = !this.LcomFlag
      this.markers.forEach(marker => {
        marker.setMap(null); // 从地图上移除标记
      });
      this.markers = []; // 清空标记数组
      this.line.setMap(null); // 从地图上移除线段
      this.text.setMap(null); // 从地图上移除文本
    },
    nextImage() {
      if (this.currentImageIndex < this.images.length - 1) {
        this.currentImageIndex++;
      } else {
        this.currentImageIndex = 0; // 回到第一张图片
      }
    },
    prevImage() {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex--;
      } else {
        this.currentImageIndex = this.images.length - 1; // 跳到最后一张图片
      }
    },
    closeViewer() {
      this.glFlag = !this.glFlag
    },
    fetchData() {
      this.listFlag = !this.listFlag
      fetch('/data_fix.geojson', {
        headers: {
          'Cache-Control': 'no-cache'
        }
      })
        .then(response => response.json())
        .then(data => {
          this.features = data.features;
          data.features.forEach((feature, index) => {
            const marker = new AMap.Marker({
              map: this.map,
              position: feature.geometry.coordinates,
              offset: new AMap.Pixel(-13, -30)
            });
            this.attPoints[index] = marker; // 保存marker实例
            this.addMarkerListeners(marker, feature); // 为marker添加事件监听器
          });
          this.map.setFitView();
        })
        .catch(error => console.error('Fetch operation error:', error));
    },
    addMarkerListeners(marker, feature) {
      marker.on('click', () => {
        this.SedMarker = marker; // 更新当前选中的Marker
        this.showCustomInfoBox = true;
        this.infoMessage = feature.properties.Name;
        this.infoadress = feature.properties.address;
        this.highlightFeature(feature,feature.properties.FID-1)
      });
    },
    highlightFeature(feature, index) {
      const selectedMarker = this.attPoints[index];
      var myIcon = new AMap.Icon({
        image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgNTYgNTYiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTI4IDRjOS4zODkgMCAxNyA3IDE3IDE5YzAgOS4xMy05Ljg0MSAyMi4zMTMtMTQuNTQ4IDI4LjA5NmMtMS4zNTQgMS42MDQtMy42MjcgMS41NC00LjkwMyAwQzIwLjg0MyA0NS4zMTYgMTEgMzIuMTMyIDExIDIzYzAtMTIgNy42MTEtMTkgMTctMTltMCAxMWE2IDYgMCAxIDAgMCAxMmE2IDYgMCAwIDAgMC0xMiIvPjwvc3ZnPg==', // 自定义图标的路径
        // size: new AMap.Size(32, 16), // 图标大小
        imageSize: new AMap.Size(135, 40),
        anchor: 'bottom-center', //设置锚点
      });

      const defaultIcon = new AMap.Icon({
        image: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png',
        imageSize: new AMap.Size(20, 35)
      })

      if (this.Cmarker == null) {
        this.Cmarker = index
        selectedMarker.setIcon(myIcon)
      }
      else if (this.Cmarker == index) {

      }
      else if (this.Cmarker != null && this.Cmarker != index) {
        this.attPoints[this.Cmarker].setIcon(defaultIcon)
        selectedMarker.setIcon(myIcon)
        this.Cmarker = index
      }

      this.infoWindow.setContent(feature.properties.Name); // 设置提示框的内容
      this.infoWindow.open(this.map, selectedMarker.getPosition()); // 打开提示框
    },
    cancelList() {
      this.map.clearMap();
      // 清空标记数组
      this.attPoints = [];
      // 改变按钮显示
      this.listFlag = true;
    },
    addWeatherInfo() {
      const weather = new AMap.Weather();

      // 实时天气查询
      const livePromise = new Promise((resolve, reject) => {
        weather.getLive('淄博市', (err, data) => {
          if (err) {
            reject(err);
          } else {
            const liveInfo = `
              <div>城市/区：${data.city}</div>
              <div>天气：${data.weather}</div>
              <div>温度：${data.temperature}℃</div>
              <div>风向：${data.windDirection}</div>
              <div>风力：${data.windPower} 级</div>
              <div>空气湿度：${data.humidity}</div>
              <div>发布时间：${data.reportTime}</div>
            `;
            resolve({ title: '实时天气', content: liveInfo });
          }
        });
      });

      // 天气预报查询
      const forecastPromise = new Promise((resolve, reject) => {
        weather.getForecast('淄博市', (err, data) => {
          if (err) {
            reject(err);
          } else {
            const forecastInfo = data.forecasts.map((day) => {
              return `<div>${day.date} 白天:${day.dayWeather} 夜间:${day.nightWeather} ${day.nightTemp}~${day.dayTemp}℃</div>`;
            }).join('');
            resolve({ title: '天气预报', content: forecastInfo });
          }
        });
      });

      // 等待两个请求都完成后更新 weatherInfo
      Promise.all([livePromise, forecastPromise])
        .then(([liveInfo, forecastInfo]) => {
          this.weatherInfo = {
            liveInfo,
            forecastInfo
          };
        })
        .catch((error) => {
          console.error('Failed to fetch weather information:', error);
        });
    },
    togglePanelSize() {
      if (this.panelState === 'expanded') {
        // 缩小窗体
        this.panelState = 'collapsed';
        this.panelWidth = '90px'; // 设置缩小后的宽度
        this.panelHeight = '40px'; // 设置缩小后的高度
      } else {
        // 恢复窗体
        this.panelState = 'expanded';
        this.panelWidth = 'auto'; // 恢复自动宽度
        this.panelHeight = 'auto'; // 恢复自动高度
      }
    },
    goToDestination(marker) {
      this.driving.search(new AMap.LngLat(118.026388, 36.895439),
        new AMap.LngLat(marker.getPosition().lng, marker.getPosition().lat),
        function (status, result) {
          if (status === 'complete') {
            console.log('success');
          } else {
            console.log('false');
          }
        })
    },
    hideCustomInfoBox() {
      this.showCustomInfoBox = false;
      this.SedMarker = null; // 清除当前选中的Marker
      this.driving.clear(); // 清空驾车路线
    },

  }
}
</script>

<style scoped>
@import url("https://a.amap.com/jsapi_demos/static/demo-center/css/demo-center.css");

#top {
  position: relative;
  z-index: 1;
}

#container {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 783px;
}

#panel {
  position: fixed;
  background-color: white;
  max-height: 90%;
  overflow-y: auto;
  top: 10px;
  right: 300px;
  width: 280px;
}

#panel .amap-lib-driving {
  border-radius: 4px;
  overflow: hidden;
}

#formT {
  position: relative;
  top: 10px;
  height: 125px;
  width: 280px;
  text-align: left;
  border: 2px solid #ccc;
  padding: 10px;
  background-color: #f7f7f7
}

.image-viewer {
  position: absolute;
  /* 使用绝对定位 */
  top: 10vh;
  /* 距离顶部的位置 */
  right: 10vw;
  /* 距离右侧的位置 */
  width: 300px;
  /* 面板宽度 */
  height: auto;
  /* 高度自适应 */
  background-color: white;
  /* 面板背景色 */
  border: 1px solid #ccc;
  /* 边框 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  /* 阴影 */
  z-index: 1000;
  /* 确保浮动面板在地图之上 */
  overflow: hidden;
  /* 隐藏溢出内容 */
  border-radius: 8px;
  /* 圆角边框 */
}

.image-container {
  width: 100%;
  /* 宽度占满容器 */
  height: 400px;
  /* 设置一个固定高度 */
  background-color: #f0f0f0;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}

.controls {
  display: flex;
  justify-content: space-around;
  padding: 10px;
}

.button {
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.close-button {
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px 10px;
  background-color: #ff4545;
  /* 为关闭按钮设置背景色 */
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 0 8px 0 8px;
  /* 调整圆角 */
}

#nav {
  height: 150px;
  width: 280px;
  text-align: left;
  border: 2px solid #ccc;
  padding: 10px;
  background-color: #f7f7f7
}

#infobox {
  position: fixed;
  background-color: white;
  max-height: 60%;
  overflow-y: auto;
  top: 20px;
  right: 10px;
  width: 280px;
}

#infobox ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

#infobox li {
  padding: 5px 0;
  cursor: pointer;
}

#infobox ul {
  list-style-type: none;
  padding: 0;
}

#infobox li {
  display: flex;
  align-items: start;
  /* 确保图片和信息在同一行 */
  padding: 10px 0;
  /* 根据需要调整上下内边距 */
}

.info-left {
  flex: 1;
  padding-left: 5px;
  /* 设置左边内边距为5px */
  padding-right: 10px;
  /* 根据需要调整右边距 */
  /* 信息占据剩余空间 */
  text-align: left;
  /* 根据需要调整右边距 */
}

.img-right {
  width: 100px;
  height: 100px;
  /* 图片高度占满行 */
  overflow: hidden;
  /* 隐藏溢出的部分 */
  position: relative;
  /* 相对定位 */
}

.full-width-img {
  width: auto;
  /* 图片宽度填满容器 */
  height: 100%;
  /* 图片高度自动 */
  position: absolute;
  /* 绝对定位 */
  top: center;
  /* 顶部对齐 */
  left: center;
}

.poi-box {
  position: relative;
  border-top: 1px solid #eaeaea;
  padding: 10px 0;
  cursor: pointer;
}

.custom-info-box {
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  z-index: 1000; /* 确保信息框显示在最上层 */
}
.info-label {
  margin-bottom: 5px;
}
</style>