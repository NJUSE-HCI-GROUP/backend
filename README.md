# backend
南京大学软件学院人机交互实践项目后端
基于Nodejs,MongoDB构建

`node` : *v20.18.0*  
`npm` : *v10.6.0*  
`mongod` : *v8.0.1*  
`suno-api` (目前由于suno的封锁,github上相关的suno-api都变得不可用了,之后我再想想办法,AI音乐生成暂时不可用)  
`ffmpeg`  
`python` : `spleeter` 

## 功能
- 伴奏人声分离 ✔️
- AI音乐生成 ❌
- 音频格式转换 ✔️
- 


## Run
```shell
npm install  # This will take a lot of time, because installing ffmpeg-static takes 10+ minutes.
node index.js
```