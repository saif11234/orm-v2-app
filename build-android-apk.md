# Building Android APK for ORM V2 App

This guide will help you build an Android APK for the ORM V2 application using Capacitor.

## Prerequisites

1. **Node.js** (v14 or higher)
2. **Java Development Kit (JDK)** (v11 or higher)
3. **Android Studio** with Android SDK
4. **Capacitor CLI**

## Installation Steps

### 1. Install Required Dependencies

```bash
# Install Capacitor CLI globally
npm install -g @capacitor/cli

# Install project dependencies
npm install
```

### 2. Add Android Platform

```bash
# Add Android platform to your project
npx cap add android
```

This will create an `android/` directory in your project.

### 3. Build the Web Application

```bash
# Build your web application
npm run build
```

### 4. Sync with Capacitor

```bash
# Sync your web app with the native project
npx cap sync
```

### 5. Open Android Studio

```bash
# Open the Android project in Android Studio
npx cap open android
```

## Building the APK

### Option 1: Using Android Studio (Recommended)

1. **Open Android Studio** and load the project from the `android/` directory
2. **Configure Signing** (for production APK):
   - Go to `Build` → `Generate Signed Bundle / APK`
   - Select `APK` and click `Next`
   - Create a new keystore or use existing one
   - Fill in the keystore information:
     - Key store path
     - Password
     - Key alias
     - Key password
   - Click `Next`
   - Select `release` build type and `v1 (Jar Signature)` and `v2 (Full APK Signature)`
   - Click `Finish`

3. **Build Debug APK** (for testing):
   - Go to `Build` → `Build Bundle(s) / APK(s)` → `Build APK(s)`
   - The APK will be generated in `android/app/build/outputs/apk/`

### Option 2: Using Command Line

```bash
# Navigate to android directory
cd android

# Build debug APK
./gradlew assembleDebug

# Build release APK (requires signing configuration)
./gradlew assembleRelease
```

## APK Locations

- **Debug APK**: `android/app/build/outputs/apk/debug/app-debug.apk`
- **Release APK**: `android/app/build/outputs/apk/release/app-release.apk`

## Troubleshooting

### Common Issues:

1. **Gradle Version Issues**:
   - Update Gradle in `android/gradle/wrapper/gradle-wrapper.properties`
   - Update Android Gradle Plugin in `android/build.gradle`

2. **SDK Version Issues**:
   - Ensure you have the correct Android SDK version installed
   - Update `compileSdkVersion` and `targetSdkVersion` in `android/app/build.gradle`

3. **Missing Dependencies**:
   - Run `npx cap sync` to ensure all dependencies are properly linked

## Configuration Notes

The `capacitor.config.json` has been configured with:
- Web directory set to root (`.`) to include all necessary files
- Splash screen disabled for faster startup
- Dark status bar theme
- Cleartext traffic enabled for local development

## Testing the APK

1. **Install on Device**:
   ```bash
   adb install path/to/your/apk.apk
   ```

2. **Test Offline Functionality**:
   - The PWA service worker should work in the Android WebView
   - Test that the app works without internet connection after initial load

3. **Test All Features**:
   - Risk assessment functionality
   - Reference tables
   - Data export (Excel, CSV, PDF)
   - Local storage persistence

## Production Considerations

1. **Code Signing**: Always use a proper signing key for production releases
2. **App Store Submission**: Follow Google Play Store guidelines
3. **Permissions**: Review and minimize Android permissions in `android/app/src/main/AndroidManifest.xml`
4. **Performance**: Test on various Android devices and API levels

## Dependencies Used

- **Capacitor**: Cross-platform native runtime
- **Electron**: For desktop version (separate from Android build)
- **Service Worker**: For offline PWA functionality
- **Export Libraries**: SheetJS (xlsx), jsPDF for document generation