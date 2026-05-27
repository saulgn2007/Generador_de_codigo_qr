/* QR Aura - Application Engine */

// ==========================================================================
// 1. Logo SVG Presets (Optimized SVG Data URIs)
// ==========================================================================
const LOGO_SVGS_RAW = {
  whatsapp: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#25D366"/><path d="M12.1 3.6c-4.7 0-8.5 3.8-8.5 8.5 0 1.5.4 3 1.2 4.3L3.6 20.4l4.2-1.1c1.2.7 2.7 1.1 4.2 1.1 4.7 0 8.5-3.8 8.5-8.5-.1-4.7-3.9-8.3-8.4-8.3zm4.5 11c-.2.6-1.1 1-1.5 1.1-.4.1-.9.1-2.5-.5-2-1-3.3-3-3.4-3.2-.1-.2-.9-1.2-.9-2.2S9 8.2 9.2 8s.4-.3.6-.3h.4c.1 0 .3-.1.5.3.2.4.6 1.5.7 1.6.1.1.1.2 0 .4-.1.1-.1.2-.3.4-.1.1-.3.3-.4.4-.1.1-.3.3-.1.5.2.4.8 1.3 1.7 2.1.8.7 1.6 1 1.9 1.1.3.1.4.1.5-.1s.7-.8.9-1c.2-.2.3-.2.5-.1.2.1 1.4.7 1.6.8.2.1.4.2.4.3 0 .5-.2 1.1-.4 1.5z" fill="#FFF"/></svg>`,
  instagram: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="5" fill="url(#ig-grad)"/><rect x="3.6" y="3.6" width="16.8" height="16.8" rx="4.5" stroke="#FFF" stroke-width="1.8"/><circle cx="12" cy="12" r="3.9" stroke="#FFF" stroke-width="1.8"/><circle cx="16.9" cy="7.1" r="1.1" fill="#FFF"/><defs><linearGradient id="ig-grad" x1="0" y1="24" x2="24" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FFDD55"/><stop offset="0.25" stop-color="#FF543E"/><stop offset="0.5" stop-color="#C837AB"/><stop offset="1" stop-color="#3771C8"/></linearGradient></defs></svg>`,
  facebook: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#1877F2"/><path d="M14 12h-2v7H9v-7H7.5V9.5H9V8c0-2 1.2-3 3-3 .8 0 1.5 0 1.7.1v2h-1.2c-.9 0-1.1.4-1.1 1v1.4h2.2L14 12z" fill="#FFF"/></svg>`,
  twitter: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="#000"/><path d="M18.2 2.2h3.3L14.3 10.5l8.5 11.3h-6.6l-5.2-6.8-5.9 6.8H1.7l7.7-8.8L1.3 2.2h6.8l4.7 6.2 5.4-6.2zm-1.2 17.5h1.8L7.1 4.1H5.1l11.9 15.6z" fill="#FFF"/></svg>`,
  youtube: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="#FF0000"/><path d="M9.5 8.5v7l6-3.5z" fill="#FFF"/></svg>`,
  github: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#24292E"/><path d="M12 4a8 8 0 00-2.5 15.6c.4.1.5-.2.5-.4v-1.5c-2.2.5-2.7-1.1-2.7-1.1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-1-3.6-4.1 0-.9.3-1.6.8-2.2-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8A7.7 7.7 0 0112 6.8c.7 0 1.4.1 2 .3 1.5-1 2.2-.8 2.2-.8.5 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.2 0 3.1-1.9 3.9-3.7 4.1.3.2.6.7.6 1.5v2.2c0 .2.1.5.5.4A8 8 0 0012 4z" fill="#FFF"/></svg>`,
  linkedin: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="#0077B5"/><path d="M6.5 19H9V10.5H6.5V19zM7.8 9.4c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5zM11.5 19h2.5v-4.5c0-.6.2-1.2.9-1.2.8 0 .9.6.9 1.2V19H18v-4.8c0-2.4-.5-4.2-3.3-4.2-1.3 0-2.2.7-2.6 1.3h-.1V10.5h-2.4C9.8 11.2 9.8 19 9.8 19z" fill="#FFF"/></svg>`,
  wifi: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#06B6D4"/><path d="M12 17a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm4.2-5.7a6 6 0 00-8.4 0l1.1 1.1a4.5 4.5 0 016.2 0l1.1-1.1zm2.1-2.1C14.7 5.6 9.2 5.6 5.6 9.2l1.1 1.1a7.8 7.8 0 0110.8 0l1.1-1.1z" fill="#FFF"/></svg>`
};

const svgToBase64 = (svgString) => {
  return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgString)));
};

// Build Base64 map programmatically
const LOGO_SVGS = {};
for (const [key, svg] of Object.entries(LOGO_SVGS_RAW)) {
  LOGO_SVGS[key] = svgToBase64(svg);
}

// Shortened URL parameters to State Keys map (for ultra compact links)
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

// ==========================================================================
// 2. Application State & Default Options
// ==========================================================================
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
let isUpdatingUi = false; // prevents recursive loop when setting inputs from state

// ==========================================================================
// 3. State <-> URL Link Serialization / Decodification
// ==========================================================================

// Get parameter value from either query string or hash safely
function getUrlParam(key) {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has(key)) return urlParams.get(key);
  
  const hashParams = new URLSearchParams(window.location.hash.substring(1));
  if (hashParams.has(key)) return hashParams.get(key);
  
  return null;
}

// Read options from URL to update initial state
function loadStateFromUrl() {
  let hasValidParams = false;
  
  for (const [shortKey, stateKey] of Object.entries(PARAM_MAP)) {
    const rawVal = getUrlParam(shortKey);
    if (rawVal !== null) {
      hasValidParams = true;
      
      // Parse data types appropriately
      if (rawVal === '1' || rawVal === '0') {
        // Boolean values
        qrState[stateKey] = rawVal === '1';
      } else if (!isNaN(rawVal) && rawVal !== '' && stateKey !== 'inputPhone' && stateKey !== 'inputWifiPassword' && stateKey !== 'inputWifiSsid') {
        // Numeric values (excluding phone numbers and wifi credentials that could be pure numeric)
        qrState[stateKey] = parseFloat(rawVal);
      } else {
        // Standard strings
        qrState[stateKey] = rawVal;
      }
    }
  }
  
  return hasValidParams;
}

// Update Browser Address bar in real-time
function updateUrl() {
  if (qrState.embed) return; // Do not modify URL state inside embed page to avoid clutter
  
  const newParams = new URLSearchParams();
  
  for (const [shortKey, stateKey] of Object.entries(PARAM_MAP)) {
    const val = qrState[stateKey];
    if (val === undefined || val === null || val === '') continue;
    
    // Check if the current value is the default to keep URL extremely short and tidy
    if (isDefaultValue(stateKey, val)) continue;

    if (typeof val === 'boolean') {
      newParams.set(shortKey, val ? '1' : '0');
    } else if (stateKey === 'logoCustom') {
      // Large custom logos shouldn't bloat the URL
      if (val.length < 6000) {
        newParams.set(shortKey, val);
      }
    } else {
      newParams.set(shortKey, val);
    }
  }
  
  const newSearch = newParams.toString();
  const currentPath = window.location.pathname;
  const newUrl = window.location.origin + currentPath + (newSearch ? '?' + newSearch : '');
  
  window.history.replaceState({ path: newUrl }, '', newUrl);
  
  // Also update shareable links input values
  updateShareLinksInputs();
}

// Verify if a state variable holds its default value (helps keeping URL short)
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

// Sync values directly into the Share Card inputs
function updateShareLinksInputs() {
  const editorInput = document.getElementById('share-url-editor');
  const embedInput = document.getElementById('share-url-embed');
  
  if (editorInput) {
    editorInput.value = window.location.href;
  }
  if (embedInput) {
    const embedUrl = new URL(window.location.href);
    embedUrl.searchParams.set('emb', '1');
    embedInput.value = embedUrl.toString();
  }
}

// ==========================================================================
// 4. QR Code Rendering Logic (QRCodeStyling Integration)
// ==========================================================================
function buildQrConfig() {
  // 1. Process RAW content depending on selected content tab
  let rawData = "https://google.com";
  const type = qrState.dataType;
  
  if (type === 'url') {
    rawData = qrState.inputUrl || "https://google.com";
    // Add protocol automatically if not entered for ease of scanning
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
    // Wi-Fi QR format: WIFI:S:MySSID;T:WPA;P:MyPassword;;
    rawData = `WIFI:S:${ssid};T:${enc};P:${password};;`;
  }
  
  // Real-time check of density warning
  checkDataLength(rawData);

  // 2. Core Dots styling
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
  
  // 3. Background styling
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
  
  // 4. Corners Frame (Outer Eye) & Corners Dots (Inner Eye Ball)
  const cornersSquareOptions = {
    type: qrState.eyeFrameShape
  };
  const cornersDotOptions = {
    type: qrState.eyeBallShape
  };
  
  if (qrState.syncEyes) {
    // Mirror Dot settings
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
    // Custom Eye colors
    cornersSquareOptions.color = qrState.eyeFrameColor;
    cornersSquareOptions.gradient = undefined;
    
    cornersDotOptions.color = qrState.eyeBallColor;
    cornersDotOptions.gradient = undefined;
  }
  
  // 5. Centered Logo / Image
  let logoSrc = "";
  if (qrState.logoPreset && qrState.logoPreset !== 'none') {
    logoSrc = LOGO_SVGS[qrState.logoPreset] || "";
  } else if (qrState.logoCustom) {
    logoSrc = qrState.logoCustom;
  }
  
  const imageOptions = {
    crossOrigin: "anonymous",
    hideBackgroundDots: qrState.logoHideDots,
    imageSize: parseFloat(qrState.logoSize) / 100, // percentage 10-40 => 0.1-0.4
    margin: parseFloat(qrState.logoMargin)
  };
  
  // Build final configuration
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
      typeNumber: 0, // Auto sizes density grid depending on data length
      mode: "Byte",
      errorCorrectionLevel: qrState.qrEcc // ECC L, M, Q, H
    }
  };
}

// Generate or update the live QR Code element
function renderQr() {
  const config = buildQrConfig();
  const containerId = qrState.embed ? 'embed-canvas-wrapper' : 'qr-canvas-container';
  const container = document.getElementById(containerId);
  
  if (!container) return;
  
  if (!qrCodeInstance) {
    // Initialize
    qrCodeInstance = new QRCodeStyling(config);
    container.innerHTML = '';
    qrCodeInstance.append(container);
  } else {
    // Hot-reload update in canvas for flawless real-time responsiveness
    qrCodeInstance.update(config);
  }
  
  // Inject visual scale-up reveal animation to QR code wrapper
  container.classList.remove('qr-render-animation');
  void container.offsetWidth; // Force DOM reflow to restart keyframe
  container.classList.add('qr-render-animation');
}

// Alert the user if the text size is too high, potentially causing scanning issues
function checkDataLength(data) {
  const warningEl = document.getElementById('qr-warning');
  if (!warningEl) return;
  
  // Threshold depends on error correction, H allows less free data due to logo space
  const limit = qrState.qrEcc === 'H' ? 120 : 180;
  if (data.length > limit) {
    warningEl.classList.remove('hidden');
  } else {
    warningEl.classList.add('hidden');
  }
}

// ==========================================================================
// 5. DOM Event Listeners & UI Controls Sync
// ==========================================================================

// Synchronize all DOM input values to match current state object
function syncUiFromState() {
  isUpdatingUi = true;
  
  // Content Tab Fields
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
  
  // Dots Shape Cards active state
  updateActiveCardsInGrid('dot-shape-picker', qrState.dotShape);
  
  // Dots Color Settings
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
  
  // Background Colors Settings
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
  
  // Eye shapes
  updateActiveCardsInGrid('eye-frame-picker', qrState.eyeFrameShape);
  updateActiveCardsInGrid('eye-ball-picker', qrState.eyeBallShape);
  
  // Eye Colors Sync Checked state
  const syncEyesChk = document.getElementById('sync-eyes-checkbox');
  if (syncEyesChk) syncEyesChk.checked = qrState.syncEyes;
  
  setInputVal('eye-frame-color', qrState.eyeFrameColor);
  setLabelText('eye-frame-color-label', qrState.eyeFrameColor.toUpperCase());
  setInputVal('eye-ball-color', qrState.eyeBallColor);
  setLabelText('eye-ball-color-label', qrState.eyeBallColor.toUpperCase());
  
  toggleEyeColorsContainer(qrState.syncEyes);
  
  // Logo presets
  updateActiveCardsInGrid('logo-presets', qrState.logoPreset, 'data-logo');
  
  // Custom logo rendering
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
  
  // Show / Hide Logo Sizing slider group
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
  
  // Advanced settings
  setInputVal('qr-size', qrState.qrSize);
  setLabelText('qr-size-val', qrState.qrSize + 'x' + qrState.qrSize);
  setInputVal('qr-margin', qrState.qrMargin);
  setLabelText('qr-margin-val', qrState.qrMargin + 'px');
  
  const qrEcc = document.getElementById('qr-error-correction');
  if (qrEcc) qrEcc.value = qrState.qrEcc;
  
  // Update Links directly
  updateShareLinksInputs();
  
  isUpdatingUi = false;
}

// Helpers to assign values safely
function setInputVal(id, val) {
  const el = document.getElementById(id);
  if (el) el.value = val;
}
function setLabelText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

// Show/Hide dynamic content input fields based on drop-down value
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

// Handle active visual state in grids
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

// Update Active Solid/Gradient toggle pills
function updateColorToggleButtons(prefix, activeType) {
  const solidBtn = document.getElementById(`${prefix}-solid-btn`);
  const gradBtn = document.getElementById(`${prefix}-gradient-btn`);
  const transBtn = document.getElementById(`${prefix}-trans-btn`); // Only BG color contains this
  
  if (solidBtn) solidBtn.classList.toggle('active', activeType === 'solid');
  if (gradBtn) gradBtn.classList.toggle('active', activeType === 'gradient');
  if (transBtn) transBtn.classList.toggle('active', activeType === 'transparent');
}

// Show/Hide color configuration group wrappers
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

// Eye colors collapse control
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

// Main binding of DOM events
function bindDomEvents() {
  
  // Tab switching
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
  
  // Content Type Dropdown
  bindElementEvent('qr-data-type', 'change', (e) => {
    qrState.dataType = e.target.value;
    showContentFields(qrState.dataType);
    stateChanged();
  });
  
  // Content fields inputs
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
  
  // Shape grids pickers
  bindGridPicker('dot-shape-picker', 'dotShape');
  bindGridPicker('eye-frame-picker', 'eyeFrameShape');
  bindGridPicker('eye-ball-picker', 'eyeBallShape');
  
  // Color Type Toggle Buttons
  bindTogglePills('dots-color', 'dotsColorType');
  bindTogglePills('bg-color', 'bgColorType');
  
  // Color pickers inputs
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
        // Update uppercase hex code labels
        setLabelText(`${id}-label`, hex.toUpperCase());
        stateChanged();
      }
    });
  });
  
  // Range sliders
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
      
      // Update label value next to it
      const displayVal = slider.callback ? slider.callback(val) : val + slider.suffix;
      setLabelText(`${slider.id}-val`, displayVal);
      stateChanged();
    });
  });
  
  // Checkboxes
  bindElementEvent('sync-eyes-checkbox', 'change', (e) => {
    qrState.syncEyes = e.target.checked;
    toggleEyeColorsContainer(qrState.syncEyes);
    stateChanged();
  });
  
  bindElementEvent('logo-hide-dots', 'change', (e) => {
    qrState.logoHideDots = e.target.checked;
    stateChanged();
  });
  
  // Advanced details accordion toggle
  const advToggle = document.getElementById('advanced-toggle');
  const advContent = document.getElementById('advanced-content');
  if (advToggle && advContent) {
    advToggle.addEventListener('click', () => {
      advToggle.classList.toggle('active');
      advContent.classList.toggle('hidden-height');
      advContent.classList.toggle('visible-height');
    });
  }
  
  // General Advanced Select inputs
  bindElementEvent('qr-error-correction', 'change', (e) => {
    qrState.qrEcc = e.target.value;
    stateChanged();
  });
  
  // Logo Preset Grid
  const logoGrid = document.getElementById('logo-presets');
  if (logoGrid) {
    const cards = logoGrid.querySelectorAll('.logo-card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const val = card.getAttribute('data-logo');
        qrState.logoPreset = val;
        
        // If they select a preset, we override and remove any uploaded custom logo
        if (val !== 'none') {
          clearCustomLogo(false); // don't trigger statechange yet to avoid double render
        }
        
        updateActiveCardsInGrid('logo-presets', val, 'data-logo');
        
        // Manage Logo settings panel display
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
  
  // Drag and Drop Local Custom Logo
  const dropzone = document.getElementById('logo-dropzone');
  const fileInput = document.getElementById('logo-file-input');
  
  if (dropzone && fileInput) {
    // Prevent browser defaults
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      dropzone.addEventListener(eventName, preventDefaults, false);
    });
    
    function preventDefaults(e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    // Highlight drop zone
    ['dragenter', 'dragover'].forEach(eventName => {
      dropzone.addEventListener(eventName, () => dropzone.classList.add('highlight'), false);
    });
    ['dragleave', 'drop'].forEach(eventName => {
      dropzone.addEventListener(eventName, () => dropzone.classList.remove('highlight'), false);
    });
    
    // Handle dropped files
    dropzone.addEventListener('drop', (e) => {
      const dt = e.dataTransfer;
      const files = dt.files;
      handleLogoFiles(files);
    });
    
    // Handle selected files
    fileInput.addEventListener('change', (e) => {
      handleLogoFiles(e.target.files);
    });
  }
  
  // Button remove custom logo
  bindElementEvent('btn-remove-logo', 'click', () => {
    clearCustomLogo(true);
  });
  
  // Copy to clipboard actions
  const copyButtons = document.querySelectorAll('.btn-copy');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const input = document.getElementById(targetId);
      if (input) {
        input.select();
        input.setSelectionRange(0, 99999); // for mobile
        
        navigator.clipboard.writeText(input.value)
          .then(() => {
            // Visual success indicator toast
            showToast("¡Enlace copiado al portapapeles con éxito!");
          })
          .catch(err => {
            console.error('Error al copiar: ', err);
            // Fallback for older browsers
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
  
  // Header share button
  bindElementEvent('btn-share-top', 'click', () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => showToast("¡Enlace de edición copiado!"))
      .catch(() => showToast("Error al copiar enlace", true));
  });
  
  // Download processes
  bindElementEvent('btn-download-png', 'click', () => downloadQr('png'));
  bindElementEvent('btn-download-svg', 'click', () => downloadQr('svg'));
  bindElementEvent('btn-embed-download-png', 'click', () => downloadQr('png'));
  bindElementEvent('btn-embed-download-svg', 'click', () => downloadQr('svg'));
}

// Helpers for cleaner element bindings
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
  const transBtn = document.getElementById(`${prefix}-trans-btn`); // Background only
  
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

// Helper mapping element ID to matching state object property key name
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

// Helper mapping back standard IDs
function idToShortKey(id) {
  const stateKey = idToStateKey(id);
  if (!stateKey) return null;
  return Object.keys(PARAM_MAP).find(k => PARAM_MAP[k] === stateKey) || null;
}

// Centra y rellena cualquier imagen (ancha o alta) en un lienzo transparente cuadrado para evitar distorsiones
function makeImageSquare(dataUrl, callback) {
  const img = new Image();
  img.onload = () => {
    // Si ya es un cuadrado perfecto, no hacemos nada para preservar la imagen original intacta
    if (img.width === img.height) {
      callback(dataUrl);
      return;
    }
    
    const canvas = document.createElement('canvas');
    const size = Math.max(img.width, img.height);
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    
    // Limpiar canvas con transparencia total
    ctx.clearRect(0, 0, size, size);
    
    // Dibujar la imagen exactamente centrada manteniendo su proporción original
    const x = (size - img.width) / 2;
    const y = (size - img.height) / 2;
    ctx.drawImage(img, x, y, img.width, img.height);
    
    // Devolver el data URL cuadrado en formato PNG transparente
    callback(canvas.toDataURL('image/png'));
  };
  img.onerror = () => {
    callback(dataUrl); // Si falla la carga, devolvemos el original
  };
  img.src = dataUrl;
}

// Custom Logo Loader
function handleLogoFiles(files) {
  if (files.length === 0) return;
  const file = files[0];
  
  // Format check
  if (!file.type.match('image.*')) {
    showToast("Por favor, selecciona solo archivos de imagen", true);
    return;
  }
  
  // Size limit (Max 1MB base64 URL safe constraint)
  if (file.size > 1.2 * 1024 * 1024) {
    showToast("La imagen es demasiado grande. Máximo 1.2 MB", true);
    return;
  }
  
  const reader = new FileReader();
  reader.onload = (e) => {
    const base64Data = e.target.result;
    
    // Procesar la imagen para hacerla cuadrada y evitar distorsión de aplastamiento
    makeImageSquare(base64Data, (squaredBase64) => {
      qrState.logoCustom = squaredBase64;
      qrState.logoCustomName = file.name;
      qrState.logoPreset = 'none'; // Deselect active preset
      
      // Visual indicators
      updateActiveCardsInGrid('logo-presets', 'none', 'data-logo');
      
      const dropzonePrompt = document.querySelector('#logo-dropzone .dropzone-prompt');
      const previewContainer = document.getElementById('logo-preview-container');
      const previewImg = document.getElementById('logo-preview-img');
      
      if (dropzonePrompt) dropzonePrompt.classList.add('hidden');
      if (previewContainer) previewContainer.classList.remove('hidden');
      if (previewImg) previewImg.src = squaredBase64;
      
      // Show slider adjustments
      const logoSettings = document.getElementById('logo-settings-group');
      if (logoSettings) {
        logoSettings.classList.remove('hidden-fade');
        logoSettings.classList.add('visible-fade');
      }
      
      // Alert user if the base64 is extremely large for sharing
      if (squaredBase64.length > 6000) {
        showToast("Logo cargado y auto-encuadrado. Nota: No se incluirá en el enlace por peso.");
      }
      
      stateChanged();
    });
  };
  reader.readAsDataURL(file);
}

// Reset custom logo input
function clearCustomLogo(triggerStateChange = true) {
  qrState.logoCustom = null;
  qrState.logoCustomName = null;
  
  // Clear HTML file input
  const fileInput = document.getElementById('logo-file-input');
  if (fileInput) fileInput.value = '';
  
  const dropzonePrompt = document.querySelector('#logo-dropzone .dropzone-prompt');
  const previewContainer = document.getElementById('logo-preview-container');
  const previewImg = document.getElementById('logo-preview-img');
  
  if (dropzonePrompt) dropzonePrompt.classList.remove('hidden');
  if (previewContainer) previewContainer.classList.add('hidden');
  if (previewImg) previewImg.src = '';
  
  // Sizing controls collapse
  const logoSettings = document.getElementById('logo-settings-group');
  if (logoSettings && qrState.logoPreset === 'none') {
    logoSettings.classList.remove('visible-fade');
    logoSettings.classList.add('hidden-fade');
  }
  
  if (triggerStateChange) {
    stateChanged();
  }
}

// Common function triggered on every user interaction
function stateChanged() {
  if (isUpdatingUi) return;
  updateUrl();
  renderQr();
}

// Display elegant pop toast notification
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
  
  // Auto-hide after 3 seconds
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Download action for QR Canvas
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

// ==========================================================================
// 6. Application Bootstrapper
// ==========================================================================
window.addEventListener('DOMContentLoaded', () => {
  // 1. Initial State decoding from browser URL
  const stateLoaded = loadStateFromUrl();
  
  // 2. Determine Embed/Visual mode
  const embedParam = getUrlParam('emb');
  if (embedParam === '1') {
    qrState.embed = true;
    
    // Adjust DOM visibilities
    const wrapper = document.getElementById('app-wrapper');
    const embedWrapper = document.getElementById('embed-container');
    if (wrapper) wrapper.classList.add('hidden');
    if (embedWrapper) embedWrapper.classList.remove('hidden');
    
    // Render and stop loading editor elements
    renderQr();
  } else {
    // Standard interface
    qrState.embed = false;
    const wrapper = document.getElementById('app-wrapper');
    const embedWrapper = document.getElementById('embed-container');
    if (wrapper) wrapper.classList.remove('hidden');
    if (embedWrapper) embedWrapper.classList.add('hidden');
    
    // Sync GUI elements based on decoded options
    syncUiFromState();
    
    // Bind all dynamic interactive controls
    bindDomEvents();
    
    // Perform initial draw
    renderQr();
  }
});
