/*
 * @FilePath: browser.ts
 * @Author: lianxin wsl1933467270@gmail.com
 * @Date: 2023-06-29 16:51:43
 * @LastEditors: lianxin wsl1933467270@gmail.com
 * @LastEditTime: 2023-06-29 17:25:36
 * Copyright (c) 2023 by ${git_name} email: ${git_email}, All Rights Reserved.
 * @Descripttion:
 */

export const IsLandscape = (useScreenOrientation()?.orientation.value ?? 'portrait-primary') == 'landscape-primary'


