/*
 * @Author: xautshuanglong
 * @Date: 2021-01-28 13:21:02
 * @LastEditor: xautshuanglong
 * @LastEditTime: 2021-01-28 13:23:42
 * @FilePath: \shuanglong_admin\src\plugins\element.js
 * @Description:
 */
import { ElButton } from 'element-plus'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import locale from 'element-plus/lib/locale'

export default (app) => {
    locale.use(lang)
    app.use(ElButton)
}
