/*
 * @Author: X_Heart
 * @Date: 2017-12-26 09:33:45
 * @Last Modified by: X_Heart
 * @Last Modified time: 2017-12-27 10:41:12
 * @description: 歌手相关api
 */
import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

export function getSingerList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    g_tk: 395482911,
    hostUin: 0,
    platform: 'yqq',
    needNewCode: 0
  })

  return jsonp(url, data, options)
}

export function getSingerDetail(singerId) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'

  const data = Object.assign({}, commonParams, {
    singermid: singerId,
    g_tk: 1878907566,
    hostUin: 0,
    notice: 0,
    platform: 'yqq',
    needNewCode: 0,
    order: 'listen',
    begin: 0,
    num: 100,
    songstatus: 1
  })

  return jsonp(url, data, options)
}