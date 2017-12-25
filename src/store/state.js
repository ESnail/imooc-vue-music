import {playMode} from 'common/js/config'

const state = {
  singer: {},
  // 是否播放
  playing: false,
  // 是否全屏
  fullScreen: false,
  // 播放列表
  playList: [],
  // 顺序列表
  sequenceList: [],
  // 播放模式
  mode: playMode.sequence,
  // 当前播放的索引
  currentIndex: -1,
  // 歌单
  disc: {}
}

export default state