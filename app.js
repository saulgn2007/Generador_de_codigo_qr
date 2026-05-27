const LOGO_SVGS_RAW = {
  whatsapp: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#25D366" d="M20.5 3.4A12.1 12.1 0 0012 0 12 12 0 001.8 17.8L0 24l6.3-1.7c1.8.9 3.8 1.4 5.7 1.4h.1c6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.6-8.3z"/><path fill="#FFF" d="M17.5 14.3c-.3 0-1.8-.9-2.1-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-1 1.2-.1.2-.3.3-.6.1s-1.3-.5-2.4-1.5a8.6 8.6 0 01-1.7-2.1c-.2-.3 0-.5.1-.6s.3-.4.5-.6c.2-.2.3-.3.4-.5.1-.2 0-.4 0-.5C10 8.6 9.3 7 9 6.4c-.3-.5-.5-.4-.7-.4h-.6c-.2 0-.6.1-.9.5s-1.1 1.1-1.1 2.7 1.2 3.1 1.4 3.4c.2.3 2.3 3.6 5.6 5 2.5 1.1 3.2 1.2 4.1 1.1s2.8-1.1 3.2-2.3c.4-1.1.4-2.1.3-2.3-.1-.1-.3-.2-.6-.3z"/></svg>`,
  instagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><linearGradient id="ig" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stop-color="#f09433"/><stop offset="25%" stop-color="#e6683c"/><stop offset="50%" stop-color="#dc2743"/><stop offset="75%" stop-color="#cc2366"/><stop offset="100%" stop-color="#bc1888"/></linearGradient></defs><rect width="24" height="24" rx="5.5" fill="url(#ig)"/><path fill="#FFF" d="M12 5.8c-2 0-2.3 0-3.1.1-1 .1-1.6.2-2.2.4a3.8 3.8 0 00-1.4.9 3.8 3.8 0 00-.9 1.4c-.2.6-.4 1.2-.4 2.2 0 .8-.1 1-.1 3.1s0 2.3.1 3.1c.1 1 .2 1.6.4 2.2a3.8 3.8 0 00.9 1.4 3.8 3.8 0 001.4.9c.6.2 1.2.4 2.2.4.8.1 1 .1 3.1.1s2.3 0 3.1-.1c1-.1 1.6-.2 2.2-.4a3.8 3.8 0 001.4-.9 3.8 3.8 0 00.9-1.4c.2-.6.4-1.2.4-2.2.1-.8.1-1 .1-3.1s0-2.3-.1-3.1c-.1-1-.2-1.6-.4-2.2a3.8 3.8 0 00-.9-1.4 3.8 3.8 0 00-1.4-.9c-.6-.2-1.2-.4-2.2-.4-.8-.1-1-.1-3.1-.1zm0 1.6c2 0 2.2 0 3 .1.9.1 1.4.2 1.8.3.4.2.8.4 1.1.7.3.3.5.7.7 1.1.2.4.3.9.3 1.8.1.8.1 1 .1 3s0 2.2-.1 3c-.1.9-.2 1.4-.3 1.8a2.5 2.5 0 01-.7 1.1 2.5 2.5 0 01-1.1.7c-.4.2-.9.3-1.8.3-.8.1-1 .1-3 .1s-2.2 0-3-.1c-.9-.1-1.4-.2-1.8-.3a2.5 2.5 0 01-1.1-.7 2.5 2.5 0 01-.7-1.1c-.2-.4-.3-.9-.3-1.8-.1-.8-.1-1-.1-3s0-2.2.1-3c.1-.9.2-1.4.3-1.8.2-.4.4-.8.7-1.1.3-.3.7-.5 1.1-.7.4-.2.9-.3 1.8-.3.8-.1 1-.1 3-.1zm0 3.4a3.2 3.2 0 100 6.4 3.2 3.2 0 000-6.4zm0 5.2a2 2 0 110-4 2 2 0 010 4zm3.3-6.5a.8.8 0 11-1.6 0 .8.8 0 011.6 0z"/></svg>`,
  facebook: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#1877F2" d="M24 12a12 12 0 1 0-13.875 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385A12.001 12.001 0 0 0 24 12z"/><path fill="#FFF" d="M15.298 15.469l.532-3.469h-3.328v-2.25c0-.949.465-1.874 1.956-1.874h1.513V4.923s-1.374-.235-2.686-.235c-2.741 0-4.533 1.662-4.533 4.669v2.57H7.078v3.469h3.047v8.385a12.1 12.1 0 0 0 3.75 0v-8.385h2.796z"/></svg>`,
  twitter: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M0 0h24v24H0z"/><path fill="#FFF" d="M18.2 2.2h3.3L14.3 10.5l8.5 11.3h-6.6l-5.2-6.8-5.9 6.8H1.7l7.7-8.8L1.3 2.2h6.8l4.7 6.2 5.4-6.2zm-1.2 17.5h1.8L7.1 4.1H5.1l11.9 15.6z"/></svg>`,
  youtube: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FF0000" d="M23.498 6.186a3 3 0 0 0-2.114-2.122C19.52 3.562 12 3.562 12 3.562s-7.52 0-9.384.502a3 3 0 0 0-2.114 2.122C0 8.058 0 12 0 12s0 3.942.502 5.814a3 3 0 0 0 2.114 2.122C4.48 20.438 12 20.438 12 20.438s7.52 0 9.384-.502a3 3 0 0 0 2.114-2.122C24 15.942 24 12 24 12s0-3.942-.502-5.814z"/><path fill="#FFF" d="M9.545 15.568l6.702-3.568-6.702-3.568v7.136z"/></svg>`,
  github: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#181717" d="M12 0C5.37 0 0 5.37 0 12c0 5.303 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.165c-3.338.726-4.043-1.41-4.043-1.41-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .32.21.69.825.57C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>`,
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#0A66C2" d="M22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z"/><path fill="#FFF" d="M7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm15.11 13.02h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67h-3.56V9h3.42v1.56h.05c.48-.9 1.63-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z"/></svg>`,
  wifi: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#06B6D4"/><path d="M12 17a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm4.2-5.7a6 6 0 00-8.4 0l1.1 1.1a4.5 4.5 0 016.2 0l1.1-1.1zm2.1-2.1C14.7 5.6 9.2 5.6 5.6 9.2l1.1 1.1a7.8 7.8 0 0110.8 0l1.1-1.1z" fill="#FFF"/></svg>`
};

const svgToBase64 = (svgString) => {
  return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgString)));
};

const LOGO_SVGS = {};
for (const [key, svg] of Object.entries(LOGO_SVGS_RAW)) {
  LOGO_SVGS[key] = svgToBase64(svg);
}

const PARAM_MAP = {
  dt: 'dataType',
  u: 'inputUrl',
  t: 'inputText',
  e_a: 'inputEmailAddress',
  e_s: 'inputEmailSubject',
  e_b: 'inputEmailBody',
  p: 'inputPhone',
  w_s: 'inputWifiSsid',
  w_p: 'inputWifiPassword',
  w_e: 'inputWifiEncryption',
  ds: 'dotShape',
  dct: 'dotsColorType',
  dcs: 'dotsColorSolid',
  dcg1: 'dotsColorGrad1',
  dcg2: 'dotsColorGrad2',
  dcgt: 'dotsColorGradType',
  dcgr: 'dotsColorGradRotation',
  bct: 'bgColorType',
  bcs: 'bgColorSolid',
  bcg1: 'bgColorGrad1',
  bcg2: 'bgColorGrad2',
  bcgt: 'bgColorGradType',
  bcgr: 'bgColorGradRotation',
  efs: 'eyeFrameShape',
  ebs: 'eyeBallShape',
  se: 'syncEyes',
  efc: 'eyeFrameColor',
  ebc: 'eyeBallColor',
  lp: 'logoPreset',
  lc: 'logoCustom',
  ls: 'logoSize',
  lm: 'logoMargin',
  lhd: 'logoHideDots',
  sz: 'qrSize',
  mg: 'qrMargin',
  ec: 'qrEcc',
  emb: 'embed'
};

const qrState = {
  dataType: 'url',
  inputUrl: 'https://google.com',
  inputText: '',
  inputEmailAddress: '',
  inputEmailSubject: '',
  inputEmailBody: '',
  inputPhone: '',
  inputWifiSsid: '',
  inputWifiPassword: '',
  inputWifiEncryption: 'WPA',
  dotShape: 'square',
  dotsColorType: 'solid',
  dotsColorSolid: '#111827',
  dotsColorGrad1: '#6366f1',
  dotsColorGrad2: '#a855f7',
  dotsColorGradType: 'linear',
  dotsColorGradRotation: 45,
  bgColorType: 'solid',
  bgColorSolid: '#ffffff',
  bgColorGrad1: '#f8fafc',
  bgColorGrad2: '#e2e8f0',
  bgColorGradType: 'linear',
  bgColorGradRotation: 135,
  eyeFrameShape: 'square',
  eyeBallShape: 'square',
  syncEyes: true,
  eyeFrameColor: '#111827',
  eyeBallColor: '#111827',
  logoPreset: 'none',
  logoCustom: null,
  logoCustomName: null,
  logoSize: 20,
  logoMargin: 5,
  logoHideDots: true,
  qrSize: 400,
  qrMargin: 15,
  qrEcc: 'H',
  embed: false
};

let qrCodeInstance = null;
let isUpdatingUi = false;

function getUrlParam(key) {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has(key)) return urlParams.get(key);
  
  const hashParams = new URLSearchParams(window.location.hash.substring(1));
  if (hashParams.has(key)) return hashParams.get(key);
  
  return null;
}

function loadStateFromUrl() {
  let hasValidParams = false;
  
  for (const [shortKey, stateKey] of Object.entries(PARAM_MAP)) {
    const rawVal = getUrlParam(shortKey);
    if (rawVal !== null) {
      hasValidParams = true;
      
      if (rawVal === '1' || rawVal === '0') {
        qrState[stateKey] = rawVal === '1';
      } else if (!isNaN(rawVal) && rawVal !== '' && stateKey !== 'inputPhone' && stateKey !== 'inputWifiPassword' && stateKey !== 'inputWifiSsid') {
        qrState[stateKey] = parseFloat(rawVal);
      } else {
        qrState[stateKey] = rawVal;
      }
    }
  }
  
  return hasValidParams;
}

function updateUrl() {
  // Logic removed: We no longer bloat the URL with parameters.
  // Short links are generated explicitly via the Backend.
}

function isDefaultValue(key, val) {
  const defaults = {
    dataType: 'url',
    inputText: '',
    inputEmailAddress: '',
    inputEmailSubject: '',
    inputEmailBody: '',
    inputPhone: '',
    inputWifiSsid: '',
    inputWifiPassword: '',
    inputWifiEncryption: 'WPA',
    dotShape: 'square',
    dotsColorType: 'solid',
    dotsColorSolid: '#111827',
    dotsColorGrad1: '#6366f1',
    dotsColorGrad2: '#a855f7',
    dotsColorGradType: 'linear',
    dotsColorGradRotation: 45,
    bgColorType: 'solid',
    bgColorSolid: '#ffffff',
    bgColorGrad1: '#f8fafc',
    bgColorGrad2: '#e2e8f0',
    bgColorGradType: 'linear',
    bgColorGradRotation: 135,
    eyeFrameShape: 'square',
    eyeBallShape: 'square',
    syncEyes: true,
    eyeFrameColor: '#111827',
    eyeBallColor: '#111827',
    logoPreset: 'none',
    logoCustom: null,
    logoSize: 20,
    logoMargin: 5,
    logoHideDots: true,
    qrSize: 400,
    qrMargin: 15,
    qrEcc: 'H',
    embed: false
  };
  
  return defaults[key] !== undefined && defaults[key] === val;
}

function updateShareLinksInputs() {
  // Inputs are populated explicitly upon generating links via backend
}

function buildQrConfig() {
  let rawData = "https://google.com";
  const type = qrState.dataType;
  
  if (type === 'url') {
    rawData = qrState.inputUrl || "https://google.com";
    if (rawData && !/^https?:\/\//i.test(rawData) && !/^mailto:/i.test(rawData) && !/^tel:/i.test(rawData)) {
      rawData = 'https://' + rawData;
    }
  } else if (type === 'text') {
    rawData = qrState.inputText || "";
  } else if (type === 'email') {
    const address = qrState.inputEmailAddress || "";
    const subject = encodeURIComponent(qrState.inputEmailSubject || "");
    const body = encodeURIComponent(qrState.inputEmailBody || "");
    rawData = `mailto:${address}?subject=${subject}&body=${body}`;
  } else if (type === 'phone') {
    rawData = `tel:${qrState.inputPhone || ""}`;
  } else if (type === 'wifi') {
    const ssid = qrState.inputWifiSsid || "";
    const password = qrState.inputWifiPassword || "";
    const enc = qrState.inputWifiEncryption || "WPA";
    rawData = `WIFI:S:${ssid};T:${enc};P:${password};;`;
  }
  
  checkDataLength(rawData);

  const dotsOptions = {
    type: qrState.dotShape
  };
  
  if (qrState.dotsColorType === 'solid') {
    dotsOptions.color = qrState.dotsColorSolid;
    dotsOptions.gradient = undefined;
  } else {
    dotsOptions.gradient = {
      type: qrState.dotsColorGradType,
      rotation: (parseFloat(qrState.dotsColorGradRotation) * Math.PI) / 180,
      colorStops: [
        { offset: 0, color: qrState.dotsColorGrad1 },
        { offset: 1, color: qrState.dotsColorGrad2 }
      ]
    };
  }
  
  const backgroundOptions = {};
  if (qrState.bgColorType === 'transparent') {
    backgroundOptions.color = 'rgba(0,0,0,0)';
    backgroundOptions.gradient = undefined;
  } else if (qrState.bgColorType === 'solid') {
    backgroundOptions.color = qrState.bgColorSolid;
    backgroundOptions.gradient = undefined;
  } else {
    backgroundOptions.gradient = {
      type: qrState.bgColorGradType,
      rotation: (parseFloat(qrState.bgColorGradRotation) * Math.PI) / 180,
      colorStops: [
        { offset: 0, color: qrState.bgColorGrad1 },
        { offset: 1, color: qrState.bgColorGrad2 }
      ]
    };
  }
  
  const cornersSquareOptions = {
    type: qrState.eyeFrameShape
  };
  const cornersDotOptions = {
    type: qrState.eyeBallShape
  };
  
  if (qrState.syncEyes) {
    if (qrState.dotsColorType === 'solid') {
      cornersSquareOptions.color = qrState.dotsColorSolid;
      cornersSquareOptions.gradient = undefined;
      cornersDotOptions.color = qrState.dotsColorSolid;
      cornersDotOptions.gradient = undefined;
    } else {
      const eyeGradient = {
        type: qrState.dotsColorGradType,
        rotation: (parseFloat(qrState.dotsColorGradRotation) * Math.PI) / 180,
        colorStops: [
          { offset: 0, color: qrState.dotsColorGrad1 },
          { offset: 1, color: qrState.dotsColorGrad2 }
        ]
      };
      cornersSquareOptions.gradient = eyeGradient;
      cornersDotOptions.gradient = eyeGradient;
    }
  } else {
    cornersSquareOptions.color = qrState.eyeFrameColor;
    cornersSquareOptions.gradient = undefined;
    
    cornersDotOptions.color = qrState.eyeBallColor;
    cornersDotOptions.gradient = undefined;
  }
  
  let logoSrc = "";
  if (qrState.logoPreset && qrState.logoPreset !== 'none') {
    logoSrc = LOGO_SVGS[qrState.logoPreset] || "";
  } else if (qrState.logoCustom) {
    logoSrc = qrState.logoCustom;
  }
  
  const imageOptions = {
    crossOrigin: "anonymous",
    hideBackgroundDots: qrState.logoHideDots,
    imageSize: parseFloat(qrState.logoSize) / 100,
    margin: parseFloat(qrState.logoMargin)
  };
  
  return {
    width: parseInt(qrState.qrSize),
    height: parseInt(qrState.qrSize),
    data: rawData || " ",
    image: logoSrc || undefined,
    dotsOptions: dotsOptions,
    backgroundOptions: backgroundOptions,
    cornersSquareOptions: cornersSquareOptions,
    cornersDotOptions: cornersDotOptions,
    imageOptions: imageOptions,
    qrOptions: {
      typeNumber: 0,
      mode: "Byte",
      errorCorrectionLevel: qrState.qrEcc
    }
  };
}

function renderQr() {
  const config = buildQrConfig();
  const containerId = qrState.embed ? 'embed-canvas-wrapper' : 'qr-canvas-container';
  const container = document.getElementById(containerId);
  
  if (!container) return;
  
  if (!qrCodeInstance) {
    qrCodeInstance = new QRCodeStyling(config);
    container.innerHTML = '';
    qrCodeInstance.append(container);
  } else {
    qrCodeInstance.update(config);
  }
  
  container.classList.remove('qr-render-animation');
  void container.offsetWidth;
  container.classList.add('qr-render-animation');
}

function checkDataLength(data) {
  const warningEl = document.getElementById('qr-warning');
  if (!warningEl) return;
  
  const limit = qrState.qrEcc === 'H' ? 120 : 180;
  if (data.length > limit) {
    warningEl.classList.remove('hidden');
  } else {
    warningEl.classList.add('hidden');
  }
}

function syncUiFromState() {
  isUpdatingUi = true;
  
  const typeSelect = document.getElementById('qr-data-type');
  if (typeSelect) typeSelect.value = qrState.dataType;
  showContentFields(qrState.dataType);
  
  setInputVal('input-url', qrState.inputUrl);
  setInputVal('input-text', qrState.inputText);
  setInputVal('input-email-address', qrState.inputEmailAddress);
  setInputVal('input-email-subject', qrState.inputEmailSubject);
  setInputVal('input-email-body', qrState.inputEmailBody);
  setInputVal('input-phone', qrState.inputPhone);
  setInputVal('input-wifi-ssid', qrState.inputWifiSsid);
  setInputVal('input-wifi-password', qrState.inputWifiPassword);
  setInputVal('input-wifi-encryption', qrState.inputWifiEncryption);
  updateActiveCardsInGrid('dot-shape-picker', qrState.dotShape);
  updateColorToggleButtons('dots-color', qrState.dotsColorType);
  setInputVal('dots-color-solid', qrState.dotsColorSolid);
  setLabelText('dots-color-solid-label', qrState.dotsColorSolid.toUpperCase());
  setInputVal('dots-grad-color1', qrState.dotsColorGrad1);
  setLabelText('dots-grad-color1-label', qrState.dotsColorGrad1.toUpperCase());
  setInputVal('dots-grad-color2', qrState.dotsColorGrad2);
  setLabelText('dots-grad-color2-label', qrState.dotsColorGrad2.toUpperCase());

  const dotsGradType = document.getElementById('dots-grad-type');
  if (dotsGradType) dotsGradType.value = qrState.dotsColorGradType;
  setInputVal('dots-grad-rotation', qrState.dotsColorGradRotation);
  setLabelText('dots-grad-rotation-val', qrState.dotsColorGradRotation + '°');
  
  showColorGroups('dots-color', qrState.dotsColorType);
  
  updateColorToggleButtons('bg-color', qrState.bgColorType);
  setInputVal('bg-color-solid', qrState.bgColorSolid);
  setLabelText('bg-color-solid-label', qrState.bgColorSolid.toUpperCase());
  
  setInputVal('bg-grad-color1', qrState.bgColorGrad1);
  setLabelText('bg-grad-color1-label', qrState.bgColorGrad1.toUpperCase());
  setInputVal('bg-grad-color2', qrState.bgColorGrad2);
  setLabelText('bg-grad-color2-label', qrState.bgColorGrad2.toUpperCase());
  
  const bgGradType = document.getElementById('bg-grad-type');
  if (bgGradType) bgGradType.value = qrState.bgColorGradType;
  setInputVal('bg-grad-rotation', qrState.bgColorGradRotation);
  setLabelText('bg-grad-rotation-val', qrState.bgColorGradRotation + '°');
  
  showColorGroups('bg-color', qrState.bgColorType);
  
  updateActiveCardsInGrid('eye-frame-picker', qrState.eyeFrameShape);
  updateActiveCardsInGrid('eye-ball-picker', qrState.eyeBallShape);
  
  const syncEyesChk = document.getElementById('sync-eyes-checkbox');
  if (syncEyesChk) syncEyesChk.checked = qrState.syncEyes;
  
  setInputVal('eye-frame-color', qrState.eyeFrameColor);
  setLabelText('eye-frame-color-label', qrState.eyeFrameColor.toUpperCase());
  setInputVal('eye-ball-color', qrState.eyeBallColor);
  setLabelText('eye-ball-color-label', qrState.eyeBallColor.toUpperCase());
  
  toggleEyeColorsContainer(qrState.syncEyes);
  

  updateActiveCardsInGrid('logo-presets', qrState.logoPreset, 'data-logo');
  

  const dropzonePrompt = document.querySelector('#logo-dropzone .dropzone-prompt');
  const previewContainer = document.getElementById('logo-preview-container');
  const previewImg = document.getElementById('logo-preview-img');
  
  if (qrState.logoCustom) {
    if (dropzonePrompt) dropzonePrompt.classList.add('hidden');
    if (previewContainer) previewContainer.classList.remove('hidden');
    if (previewImg) previewImg.src = qrState.logoCustom;
  } else {
    if (dropzonePrompt) dropzonePrompt.classList.remove('hidden');
    if (previewContainer) previewContainer.classList.add('hidden');
    if (previewImg) previewImg.src = '';
  }
  
  const logoSettings = document.getElementById('logo-settings-group');
  const hasLogo = (qrState.logoPreset && qrState.logoPreset !== 'none') || qrState.logoCustom;
  if (logoSettings) {
    if (hasLogo) {
      logoSettings.classList.remove('hidden-fade');
      logoSettings.classList.add('visible-fade');
    } else {
      logoSettings.classList.remove('visible-fade');
      logoSettings.classList.add('hidden-fade');
    }
  }
  
  setInputVal('logo-size', qrState.logoSize);
  setLabelText('logo-size-val', qrState.logoSize + '%');
  setInputVal('logo-margin', qrState.logoMargin);
  setLabelText('logo-margin-val', qrState.logoMargin + 'px');
  
  const logoHideDotsChk = document.getElementById('logo-hide-dots');
  if (logoHideDotsChk) logoHideDotsChk.checked = qrState.logoHideDots;
  
  setInputVal('qr-size', qrState.qrSize);
  setLabelText('qr-size-val', qrState.qrSize + 'x' + qrState.qrSize);
  setInputVal('qr-margin', qrState.qrMargin);
  setLabelText('qr-margin-val', qrState.qrMargin + 'px');
  
  const qrEcc = document.getElementById('qr-error-correction');
  if (qrEcc) qrEcc.value = qrState.qrEcc;
  
  updateShareLinksInputs();
  
  isUpdatingUi = false;
}

function setInputVal(id, val) {
  const el = document.getElementById(id);
  if (el) el.value = val;
}
function setLabelText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function showContentFields(type) {
  const fields = ['url', 'text', 'email', 'phone', 'wifi'];
  fields.forEach(f => {
    const el = document.getElementById(`field-${f}`);
    if (el) {
      if (f === type) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    }
  });
}

function updateActiveCardsInGrid(gridId, activeVal, dataAttr = 'data-value') {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  
  const cards = grid.querySelectorAll('.shape-card, .logo-card');
  cards.forEach(card => {
    if (card.getAttribute(dataAttr) === activeVal) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
}

function updateColorToggleButtons(prefix, activeType) {
  const solidBtn = document.getElementById(`${prefix}-solid-btn`);
  const gradBtn = document.getElementById(`${prefix}-gradient-btn`);
  const transBtn = document.getElementById(`${prefix}-trans-btn`);
  
  if (solidBtn) solidBtn.classList.toggle('active', activeType === 'solid');
  if (gradBtn) gradBtn.classList.toggle('active', activeType === 'gradient');
  if (transBtn) transBtn.classList.toggle('active', activeType === 'transparent');
}

function showColorGroups(prefix, activeType) {
  const solidGroup = document.getElementById(`${prefix}-solid-group`);
  const gradGroup = document.getElementById(`${prefix}-gradient-group`);
  
  if (solidGroup) {
    if (activeType === 'solid') {
      solidGroup.classList.remove('hidden');
    } else {
      solidGroup.classList.add('hidden');
    }
  }
  
  if (gradGroup) {
    if (activeType === 'gradient') {
      gradGroup.classList.remove('hidden');
    } else {
      gradGroup.classList.add('hidden');
    }
  }
}

function toggleEyeColorsContainer(synced) {
  const container = document.getElementById('eye-colors-container');
  if (!container) return;
  
  if (synced) {
    container.classList.remove('visible-fade');
    container.classList.add('hidden-fade');
  } else {
    container.classList.remove('hidden-fade');
    container.classList.add('visible-fade');
  }
}

function bindDomEvents() {
  
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      const targetId = tab.getAttribute('data-tab');
      const panes = document.querySelectorAll('.tab-pane');
      panes.forEach(pane => {
        if (pane.id === targetId) {
          pane.classList.add('active');
        } else {
          pane.classList.remove('active');
        }
      });
    });
  });
  
  bindElementEvent('qr-data-type', 'change', (e) => {
    qrState.dataType = e.target.value;
    showContentFields(qrState.dataType);
    stateChanged();
  });
  
  const contentInputIds = [
    'input-url', 'input-text', 'input-email-address', 
    'input-email-subject', 'input-email-body', 'input-phone', 
    'input-wifi-ssid', 'input-wifi-password', 'input-wifi-encryption'
  ];
  contentInputIds.forEach(id => {
    bindElementEvent(id, 'input', (e) => {
      const stateKey = PARAM_MAP[Object.keys(PARAM_MAP).find(k => PARAM_MAP[k] === id.replace('input-', '').replace('-', '_').replace('address', 'Address').replace('subject', 'Subject').replace('body', 'Body').replace('ssid', 'Ssid').replace('password', 'Password').replace('encryption', 'Encryption'))] || idToStateKey(id);
      if (stateKey) {
        qrState[stateKey] = e.target.value;
        stateChanged();
      }
    });
  });
  
  bindGridPicker('dot-shape-picker', 'dotShape');
  bindGridPicker('eye-frame-picker', 'eyeFrameShape');
  bindGridPicker('eye-ball-picker', 'eyeBallShape');
  
  bindTogglePills('dots-color', 'dotsColorType');
  bindTogglePills('bg-color', 'bgColorType');
  
  const colorInputIds = [
    'dots-color-solid', 'dots-grad-color1', 'dots-grad-color2',
    'bg-color-solid', 'bg-grad-color1', 'bg-grad-color2',
    'eye-frame-color', 'eye-ball-color'
  ];
  colorInputIds.forEach(id => {
    bindElementEvent(id, 'input', (e) => {
      const stateKey = idToStateKey(id);
      if (stateKey) {
        const hex = e.target.value;
        qrState[stateKey] = hex;
        setLabelText(`${id}-label`, hex.toUpperCase());
        stateChanged();
      }
    });
  });
  
  const sliders = [
    { id: 'dots-grad-rotation', key: 'dotsColorGradRotation', suffix: '°' },
    { id: 'bg-grad-rotation', key: 'bgColorGradRotation', suffix: '°' },
    { id: 'logo-size', key: 'logoSize', suffix: '%' },
    { id: 'logo-margin', key: 'logoMargin', suffix: 'px' },
    { id: 'qr-size', key: 'qrSize', suffix: 'px', callback: (val) => `${val}x${val}` },
    { id: 'qr-margin', key: 'qrMargin', suffix: 'px' }
  ];
  sliders.forEach(slider => {
    bindElementEvent(slider.id, 'input', (e) => {
      const val = parseFloat(e.target.value);
      qrState[slider.key] = val;
      
      const displayVal = slider.callback ? slider.callback(val) : val + slider.suffix;
      setLabelText(`${slider.id}-val`, displayVal);
      stateChanged();
    });
  });
  
  bindElementEvent('sync-eyes-checkbox', 'change', (e) => {
    qrState.syncEyes = e.target.checked;
    toggleEyeColorsContainer(qrState.syncEyes);
    stateChanged();
  });
  
  bindElementEvent('logo-hide-dots', 'change', (e) => {
    qrState.logoHideDots = e.target.checked;
    stateChanged();
  });
  
  const advToggle = document.getElementById('advanced-toggle');
  const advContent = document.getElementById('advanced-content');
  if (advToggle && advContent) {
    advToggle.addEventListener('click', () => {
      advToggle.classList.toggle('active');
      advContent.classList.toggle('hidden-height');
      advContent.classList.toggle('visible-height');
    });
  }
  
  bindElementEvent('qr-error-correction', 'change', (e) => {
    qrState.qrEcc = e.target.value;
    stateChanged();
  });
  
  const logoGrid = document.getElementById('logo-presets');
  if (logoGrid) {
    const cards = logoGrid.querySelectorAll('.logo-card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const val = card.getAttribute('data-logo');
        qrState.logoPreset = val;
        
        if (val !== 'none') {
          clearCustomLogo(false);
        }
        
        updateActiveCardsInGrid('logo-presets', val, 'data-logo');
        
        const logoSettings = document.getElementById('logo-settings-group');
        const hasLogo = val !== 'none' || qrState.logoCustom;
        if (logoSettings) {
          if (hasLogo) {
            logoSettings.classList.remove('hidden-fade');
            logoSettings.classList.add('visible-fade');
          } else {
            logoSettings.classList.remove('visible-fade');
            logoSettings.classList.add('hidden-fade');
          }
        }
        
        stateChanged();
      });
    });
  }
  
  const dropzone = document.getElementById('logo-dropzone');
  const fileInput = document.getElementById('logo-file-input');
  
  if (dropzone && fileInput) {
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      dropzone.addEventListener(eventName, preventDefaults, false);
    });
    
    function preventDefaults(e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    ['dragenter', 'dragover'].forEach(eventName => {
      dropzone.addEventListener(eventName, () => dropzone.classList.add('highlight'), false);
    });
    ['dragleave', 'drop'].forEach(eventName => {
      dropzone.addEventListener(eventName, () => dropzone.classList.remove('highlight'), false);
    });
    
    dropzone.addEventListener('drop', (e) => {
      const dt = e.dataTransfer;
      const files = dt.files;
      handleLogoFiles(files);
    });
    
    fileInput.addEventListener('change', (e) => {
      handleLogoFiles(e.target.files);
    });
  }
  
  bindElementEvent('btn-remove-logo', 'click', () => {
    clearCustomLogo(true);
  });
  
  const copyButtons = document.querySelectorAll('.btn-copy');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const input = document.getElementById(targetId);
      if (input) {
        input.select();
        input.setSelectionRange(0, 99999);
        
        navigator.clipboard.writeText(input.value)
          .then(() => {
            showToast("¡Enlace copiado al portapapeles con éxito!");
          })
          .catch(err => {
            console.error('Error al copiar: ', err);
            try {
              document.execCommand('copy');
              showToast("¡Enlace copiado!");
            } catch (e) {
              showToast("Error al copiar enlace", true);
            }
          });
      }
    });
  });
  
  bindElementEvent('btn-share-top', 'click', generateShareLinks);
  bindElementEvent('btn-generate-links', 'click', generateShareLinks);
  
  bindElementEvent('btn-download-png', 'click', () => downloadQr('png'));
  bindElementEvent('btn-download-svg', 'click', () => downloadQr('svg'));
  bindElementEvent('btn-embed-download-png', 'click', () => downloadQr('png'));
  bindElementEvent('btn-embed-download-svg', 'click', () => downloadQr('svg'));
}

async function generateShareLinks() {
  showToast("Generando enlaces...");
  try {
    const response = await fetch('/api/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(qrState)
    });
    
    if (!response.ok) throw new Error('Error al guardar');
    
    const data = await response.json();
    
    const editorInput = document.getElementById('share-url-editor');
    const embedInput = document.getElementById('share-url-embed');
    
    if (editorInput) editorInput.value = data.url;
    if (embedInput) embedInput.value = data.embedUrl;
    
    showToast("¡Enlaces generados con éxito!");
  } catch (error) {
    console.error(error);
    showToast("Error al generar enlaces", true);
  }
}

function bindElementEvent(id, event, handler) {
  const el = document.getElementById(id);
  if (el) el.addEventListener(event, handler);
}

function bindGridPicker(gridId, stateKey) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  
  const cards = grid.querySelectorAll('.shape-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const val = card.getAttribute('data-value');
      qrState[stateKey] = val;
      updateActiveCardsInGrid(gridId, val);
      stateChanged();
    });
  });
}

function bindTogglePills(prefix, stateKey) {
  const solidBtn = document.getElementById(`${prefix}-solid-btn`);
  const gradBtn = document.getElementById(`${prefix}-gradient-btn`);
  const transBtn = document.getElementById(`${prefix}-trans-btn`);
  
  const toggle = (val) => {
    qrState[stateKey] = val;
    updateColorToggleButtons(prefix, val);
    showColorGroups(prefix, val);
    stateChanged();
  };
  
  if (solidBtn) solidBtn.addEventListener('click', () => toggle('solid'));
  if (gradBtn) gradBtn.addEventListener('click', () => toggle('gradient'));
  if (transBtn) transBtn.addEventListener('click', () => toggle('transparent'));
}

function idToStateKey(id) {
  const map = {
    'input-url': 'inputUrl',
    'input-text': 'inputText',
    'input-email-address': 'inputEmailAddress',
    'input-email-subject': 'inputEmailSubject',
    'input-email-body': 'inputEmailBody',
    'input-phone': 'inputPhone',
    'input-wifi-ssid': 'inputWifiSsid',
    'input-wifi-password': 'inputWifiPassword',
    'input-wifi-encryption': 'inputWifiEncryption',
    'dots-color-solid': 'dotsColorSolid',
    'dots-grad-color1': 'dotsColorGrad1',
    'dots-grad-color2': 'dotsColorGrad2',
    'dots-grad-type': 'dotsColorGradType',
    'dots-grad-rotation': 'dotsColorGradRotation',
    'bg-color-solid': 'bgColorSolid',
    'bg-grad-color1': 'bgColorGrad1',
    'bg-grad-color2': 'bgColorGrad2',
    'bg-grad-type': 'bgColorGradType',
    'bg-grad-rotation': 'bgColorGradRotation',
    'eye-frame-color': 'eyeFrameColor',
    'eye-ball-color': 'eyeBallColor',
    'logo-size': 'logoSize',
    'logo-margin': 'logoMargin',
    'qr-size': 'qrSize',
    'qr-margin': 'qrMargin',
    'qr-error-correction': 'qrEcc'
  };
  return map[id] || null;
}

function idToShortKey(id) {
  const stateKey = idToStateKey(id);
  if (!stateKey) return null;
  return Object.keys(PARAM_MAP).find(k => PARAM_MAP[k] === stateKey) || null;
}

function makeImageSquare(dataUrl, callback) {
  const img = new Image();
  img.onload = () => {
    if (img.width === img.height) {
      callback(dataUrl);
      return;
    }
    
    const canvas = document.createElement('canvas');
    const size = Math.max(img.width, img.height);
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    
    ctx.clearRect(0, 0, size, size);
    
    const x = (size - img.width) / 2;
    const y = (size - img.height) / 2;
    ctx.drawImage(img, x, y, img.width, img.height);
    
    callback(canvas.toDataURL('image/png'));
  };
  img.onerror = () => {
    callback(dataUrl);
  };
  img.src = dataUrl;
}

function handleLogoFiles(files) {
  if (files.length === 0) return;
  const file = files[0];
  
  if (!file.type.match('image.*')) {
    showToast("Por favor, selecciona solo archivos de imagen", true);
    return;
  }
  
  if (file.size > 1.2 * 1024 * 1024) {
    showToast("La imagen es demasiado grande. Máximo 1.2 MB", true);
    return;
  }
  
  const reader = new FileReader();
  reader.onload = (e) => {
    const base64Data = e.target.result;
    
    makeImageSquare(base64Data, (squaredBase64) => {
      qrState.logoCustom = squaredBase64;
      qrState.logoCustomName = file.name;
      qrState.logoPreset = 'none';
      updateActiveCardsInGrid('logo-presets', 'none', 'data-logo');
      const dropzonePrompt = document.querySelector('#logo-dropzone .dropzone-prompt');
      const previewContainer = document.getElementById('logo-preview-container');
      const previewImg = document.getElementById('logo-preview-img');
      if (dropzonePrompt) dropzonePrompt.classList.add('hidden');
      if (previewContainer) previewContainer.classList.remove('hidden');
      if (previewImg) previewImg.src = squaredBase64;
      const logoSettings = document.getElementById('logo-settings-group');
      if (logoSettings) {
        logoSettings.classList.remove('hidden-fade');
        logoSettings.classList.add('visible-fade');
      }
      
      if (squaredBase64.length > 6000) {
        showToast("Logo cargado y auto-encuadrado. Nota: No se incluirá en el enlace por peso.");
      }
      
      stateChanged();
    });
  };
  reader.readAsDataURL(file);
}

function clearCustomLogo(triggerStateChange = true) {
  qrState.logoCustom = null;
  qrState.logoCustomName = null;
  
  const fileInput = document.getElementById('logo-file-input');
  if (fileInput) fileInput.value = '';
  
  const dropzonePrompt = document.querySelector('#logo-dropzone .dropzone-prompt');
  const previewContainer = document.getElementById('logo-preview-container');
  const previewImg = document.getElementById('logo-preview-img');
  
  if (dropzonePrompt) dropzonePrompt.classList.remove('hidden');
  if (previewContainer) previewContainer.classList.add('hidden');
  if (previewImg) previewImg.src = '';
  
  const logoSettings = document.getElementById('logo-settings-group');
  if (logoSettings && qrState.logoPreset === 'none') {
    logoSettings.classList.remove('visible-fade');
    logoSettings.classList.add('hidden-fade');
  }
  
  if (triggerStateChange) {
    stateChanged();
  }
}

function stateChanged() {
  if (isUpdatingUi) return;
  updateUrl();
  renderQr();
}

function showToast(message, isError = false) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  const icon = toast.querySelector('.toast-icon');
  
  if (!toast || !toastMsg) return;
  
  toastMsg.textContent = message;
  
  if (isError) {
    toast.style.borderColor = 'var(--accent-danger)';
    toast.style.boxShadow = '0 10px 25px -5px rgba(239, 68, 68, 0.3)';
    if (icon) {
      icon.className = 'fa-solid fa-circle-exclamation toast-icon';
      icon.style.color = 'var(--accent-danger)';
    }
  } else {
    toast.style.borderColor = 'var(--accent-success)';
    toast.style.boxShadow = '0 10px 25px -5px rgba(16, 185, 129, 0.3)';
    if (icon) {
      icon.className = 'fa-solid fa-circle-check toast-icon';
      icon.style.color = 'var(--accent-success)';
    }
  }
  
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

function downloadQr(format) {
  if (!qrCodeInstance) return;
  
  try {
    showToast(`Generando archivo ${format.toUpperCase()}...`);
    qrCodeInstance.download({
      name: `qr-aura-${qrState.dataType}`,
      extension: format
    });
  } catch (err) {
    console.error(err);
    showToast("Error al descargar el código QR", true);
  }
}

window.addEventListener('DOMContentLoaded', async () => {
  const pathParts = window.location.pathname.split('/');
  const isEditor = pathParts.includes('e');
  const isEmbed = pathParts.includes('q');
  let configId = null;
  
  if (isEditor || isEmbed) {
    configId = pathParts[pathParts.length - 1];
  }
  
  if (configId) {
    try {
      const res = await fetch(`/api/config/${configId}`);
      if (res.ok) {
        const data = await res.json();
        Object.assign(qrState, data);
      }
    } catch (e) {
      console.error("No se pudo cargar la configuración:", e);
    }
  } else {
    loadStateFromUrl();
  }
  
  if (isEmbed || getUrlParam('emb') === '1') {
    qrState.embed = true;
    
    const wrapper = document.getElementById('app-wrapper');
    const embedWrapper = document.getElementById('embed-container');
    if (wrapper) wrapper.classList.add('hidden');
    if (embedWrapper) embedWrapper.classList.remove('hidden');
    
    renderQr();
  } else {
    qrState.embed = false;
    const wrapper = document.getElementById('app-wrapper');
    const embedWrapper = document.getElementById('embed-container');
    if (wrapper) wrapper.classList.remove('hidden');
    if (embedWrapper) embedWrapper.classList.add('hidden');
    
    syncUiFromState();
    bindDomEvents();
    renderQr();
  }
});