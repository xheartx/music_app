/*
 * @Author: X_Heart
 * @Date: 2017-12-18 15:33:03
 * @Last Modified by: X_Heart
 * @Last Modified time: 2017-12-24 21:07:23
 * @description: 推荐相关api
 */
import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

export function getDiscList() {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'

  const data = Object.assign({}, commonParams, {
    picmid: 1,
    rnd: Math.random,
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    format: 'jsonp',
    notice: 0,
    platform: 'yqq',
    needNewCode: 0,
    categoryId: 10000000,
    sortId: 5,
    sin: 0,
    ein: 29
  })

  return jsonp(url, data, options)
}