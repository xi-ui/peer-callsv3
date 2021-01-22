export const MINIMIZE_TOGGLE = 'MINIMIZE_TOGGLE'

export const ALERT = 'ALERT'
export const ALERT_DISMISS = 'ALERT_DISMISS'
export const ALERT_CLEAR = 'ALERT_CLEAR'

export type DialState = 'hung-up' | 'dialling' | 'in-call'

export const DIAL = 'DIAL'
export const DIAL_STATE_HUNG_UP: DialState = 'hung-up'
export const DIAL_STATE_DIALLING: DialState = 'dialling'
export const DIAL_STATE_IN_CALL: DialState = 'in-call'

export const HANG_UP = 'HANG_UP'

export const INIT = 'INIT'

export const ME = '_me_'
export const PEERCALLS = '[PeerCalls]'

export const NOTIFY = 'NOTIFY'
export const NOTIFY_DISMISS = 'NOTIFY_DISMISS'
export const NOTIFY_CLEAR = 'NOTIFY_CLEAR'

export const MESSAGE_ADD = 'MESSAGE_ADD'

export const MEDIA_ENUMERATE = 'MEDIA_ENUMERATE'
export const MEDIA_STREAM = 'MEDIA_STREAM'
export const MEDIA_VIDEO_CONSTRAINT_SET = 'MEDIA_VIDEO_CONSTRAINT_SET'
export const MEDIA_AUDIO_CONSTRAINT_SET = 'MEDIA_AUDIO_CONSTRAINT_SET'
export const MEDIA_PLAY = 'MEDIA_PLAY'

export const NICKNAME_SET = 'NICKNAME_SET'

export const PEER_ADD = 'PEER_ADD'
export const PEER_REMOVE = 'PEER_REMOVE'

export const PEER_EVENT_ERROR = 'error'
export const PEER_EVENT_CONNECT = 'connect'
export const PEER_EVENT_CLOSE = 'close'
export const PEER_EVENT_SIGNAL = 'signal'
export const PEER_EVENT_TRACK = 'track'
export const PEER_EVENT_DATA = 'data'

export const SOCKET_EVENT_READY = 'ready'
export const SOCKET_EVENT_SIGNAL = 'signal'
export const SOCKET_EVENT_USERS = 'users'

export const STREAM_ADD = 'PEER_STREAM_ADD'
export const STREAM_REMOVE = 'PEER_STREAM_REMOVE'
export const STREAM_TRACK_ADD = 'PEER_STREAM_TRACK_ADD'
export const STREAM_TRACK_REMOVE = 'PEER_STREAM_TRACK_REMOVE'

export const STREAM_TYPE_CAMERA = 'camera'
export const STREAM_TYPE_DESKTOP = 'desktop'
