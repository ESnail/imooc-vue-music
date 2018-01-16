import jsonp from 'common/js/jsonp'
import {commonParams, options, guid} from './config'
import axios from 'axios'

export function getLyric (mid) {
  const url = '/api/lyric'

  const data = Object.assign({}, commonParams, {
    songmid: mid,
    pcachetime: +new Date(),
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    g_tk: '189460951',
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getSongVKey (songmid) {
  const url = 'https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg'

  const timeRandom = +new Date()
  const data = Object.assign({}, commonParams, {
    loginUin: 0,
    hostUin: 0,
    format: 'json',
    platform: 'yqq',
    needNewCode: 0,
    cid: '205361747',
    uin: 0,
    songmid,
    filename: `C400${songmid}.m4a`,
    guid: guid,
    g_tk: 189460951,
    callback: `MusicJsonCallback${timeRandom}`
  })

  const opts = Object.assign({}, options, {
    name: `MusicJsonCallback${timeRandom}`
  })

  return jsonp(url, data, opts)
}