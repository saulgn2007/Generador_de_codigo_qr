const LOGO_SVGS_RAW = {
  whatsapp: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#25D366" d="M20.5 3.4A12.1 12.1 0 0012 0 12 12 0 001.8 17.8L0 24l6.3-1.7c1.8.9 3.8 1.4 5.7 1.4h.1c6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.6-8.3z"/><path fill="#FFF" d="M17.5 14.3c-.3 0-1.8-.9-2.1-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-1 1.2-.1.2-.3.3-.6.1s-1.3-.5-2.4-1.5a8.6 8.6 0 01-1.7-2.1c-.2-.3 0-.5.1-.6s.3-.4.5-.6c.2-.2.3-.3.4-.5.1-.2 0-.4 0-.5C10 8.6 9.3 7 9 6.4c-.3-.5-.5-.4-.7-.4h-.6c-.2 0-.6.1-.9.5s-1.1 1.1-1.1 2.7 1.2 3.1 1.4 3.4c.2.3 2.3 3.6 5.6 5 2.5 1.1 3.2 1.2 4.1 1.1s2.8-1.1 3.2-2.3c.4-1.1.4-2.1.3-2.3-.1-.1-.3-.2-.6-.3z"/></svg>`,
  instagram: `data:image/png;base64,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`,
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
  LOGO_SVGS[key] = svg.startsWith('data:') ? svg : svgToBase64(svg);
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