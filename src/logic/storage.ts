import dayjs from 'dayjs'
import { useDebounceFn } from '@vueuse/core'
import { globalState } from './store'
import { MERGE_SETTING_DELAY } from './const'
import { log, downloadJsonByTagA } from './util'

const uploadFn = () => {
  log('Start syncing settings')
  globalState.setting.syncTime = Date.now()
  const localData = JSON.stringify({
    style: globalState.style,
    setting: globalState.setting,
  })
  chrome.storage.sync.set({ PuzzleTabSetting: localData }, () => {
    log('Sync settings complete')
  })
}
const uploadSetting = useDebounceFn(uploadFn, MERGE_SETTING_DELAY)

watch([
  () => globalState.style,
  () => globalState.setting.general,
  () => globalState.setting.bookmark,
  () => globalState.setting.clockDigital,
  () => globalState.setting.clockAnalog,
  () => globalState.setting.date,
  () => globalState.setting.calendar,
  () => globalState.setting.weather,
], () => {
  uploadSetting()
}, {
  deep: true,
})

const mergeSetting = (state: any, acceptState: any) => {
  const filterState = {} as any
  const fieldList = Object.keys(acceptState)
  for (const field of fieldList) {
    if (field in state) {
      filterState[field] = acceptState[field]
    }
  }
  return { ...state, ...filterState }
}

const updateSetting = (data: any) => {
  // style
  if (data.style.general) {
    globalState.style.general = mergeSetting(globalState.style.general, data.style.general)
  }
  if (data.style.bookmark) {
    globalState.style.bookmark = mergeSetting(globalState.style.bookmark, data.style.bookmark)
  }
  if (data.style.clockDigital) {
    globalState.style.clockDigital = mergeSetting(globalState.style.clockDigital, data.style.clockDigital)
  }
  if (data.style.clockAnalog) {
    globalState.style.clockAnalog = mergeSetting(globalState.style.clockAnalog, data.style.clockAnalog)
  }
  if (data.style.date) {
    globalState.style.date = mergeSetting(globalState.style.date, data.style.date)
  }
  if (data.style.calendar) {
    globalState.style.calendar = mergeSetting(globalState.style.calendar, data.style.calendar)
  }
  if (data.style.weather) {
    globalState.style.weather = mergeSetting(globalState.style.weather, data.style.weather)
  }
  // setting
  if (data.setting.general) {
    globalState.setting.general = mergeSetting(globalState.setting.general, data.setting.general)
  }
  if (data.setting.bookmark) {
    globalState.setting.bookmark = mergeSetting(globalState.setting.bookmark, data.setting.bookmark)
  }
  if (data.setting.clockDigital) {
    globalState.setting.clockDigital = mergeSetting(globalState.setting.clockDigital, data.setting.clockDigital)
  }
  if (data.setting.clockAnalog) {
    globalState.setting.clockAnalog = mergeSetting(globalState.setting.clockAnalog, data.setting.clockAnalog)
  }
  if (data.setting.date) {
    globalState.setting.date = mergeSetting(globalState.setting.date, data.setting.date)
  }
  if (data.setting.calendar) {
    globalState.setting.calendar = mergeSetting(globalState.setting.calendar, data.setting.calendar)
  }
  if (data.setting.weather) {
    globalState.setting.weather = mergeSetting(globalState.setting.weather, data.setting.weather)
  }
}

export const loadSyncSetting = () => {
  chrome.storage.sync.get(null, ({ PuzzleTabSetting }) => {
    if (!PuzzleTabSetting) {
      log('Notfound settings')
      uploadFn() // 初始化默认设置数据到云端
      return
    }

    const cloudSetting = JSON.parse(PuzzleTabSetting)
    if (cloudSetting.setting.syncTime === globalState.setting.syncTime) {
      log('None modification settings')
      return
    }

    log('Load settings', cloudSetting)
    globalState.setting.syncTime = cloudSetting.setting.syncTime
    updateSetting(cloudSetting)
  })
}

export const importSetting = (text: string) => {
  if (!text) {
    return
  }
  let fileContent = {} as any
  try {
    fileContent = JSON.parse(text)
  } catch (e) {
    log('Parse error', e)
    window.$message.error(window.$t('common.fail'))
  }
  if (Object.keys(fileContent).length === 0) {
    return
  }
  log('FileContent', fileContent)
  updateSetting(fileContent)
}

export const exportSetting = () => {
  const filename = `puzzletab-${dayjs().format('YYYYMMDD-HHmmss')}.json`
  downloadJsonByTagA({
    style: globalState.style,
    setting: globalState.setting,
  }, filename)
  window.$message.success(window.$t('common.success'))
}

export const resetSetting = () => {
  chrome.storage.sync.clear()
  localStorage.clear()
  location.reload()
}
