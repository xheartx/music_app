/*
 * @Author: X_Heart
 * @Date: 2017-12-18 15:33:03
 * @Last Modified by: X_Heart
 * @Last Modified time: 2017-12-18 16:20:15
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