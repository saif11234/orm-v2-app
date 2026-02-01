# ORM V2 Application

## Executive Summary

**ORM V2** is a sophisticated, multi-platform risk assessment and management application designed for military and aviation operations. Developed as a cross-platform solution, it serves as a comprehensive tool for operational risk management (ORM) with advanced features for risk calculation, documentation, and export capabilities.

**Version:** 1.0.0  
**Platform:** Cross-platform (Web, PWA, Desktop)  
**Target Users:** Military personnel, aviation crews, operational planners  
**License:** MIT  

## Project Overview

ORM V2 is a mission-critical application that provides a structured framework for identifying, assessing, and mitigating operational risks. The application combines military-grade risk assessment methodologies with modern web technologies to deliver a robust, user-friendly interface for operational planning and safety management.

### Key Features

- **Multi-Platform Deployment**: Web application, Progressive Web App (PWA), and desktop application via Electron
- **Comprehensive Risk Assessment**: 5-category risk evaluation system with likelihood and severity scoring
- **Advanced Export Capabilities**: Excel (XLSX), CSV, and PDF export with military-grade formatting
- **Reference Database**: Built-in hazard examples with customizable categories
- **Real-time Risk Calculation**: Dynamic risk scoring with deduction factors
- **Military-Grade UI**: Themed interface with accessibility and usability standards

## Technical Architecture

### Frontend Technologies
- **Core Framework**: Vanilla JavaScript (ES6+)
- **Styling**: CSS3 with advanced animations and responsive design
- **Export Libraries**: 
  - SheetJS (xlsx) for Excel exports
  - jsPDF for PDF generation
- **UI Framework**: Custom military-themed CSS with accessibility features

### Backend & Runtime
- **Desktop Runtime**: Electron.js for cross-platform desktop deployment
- **Web Server**: Express.js for local development and PWA serving
- **Storage**: LocalStorage for persistent data and user preferences

### Configuration & Build Tools
- **Package Manager**: npm with comprehensive dependency management
- **Build System**: Custom build scripts with Forge for Electron packaging
- **Mobile Support**: Capacitor configuration for potential mobile deployment
- **PWA Support**: Service worker and manifest for offline capabilities

## Project Structure

```
orm-v2-app/
├── src/
│   ├── web/                    # Web application source
│   │   ├── index.html         # Main application interface
│   │   ├── assessment.html    # Risk assessment module
│   │   ├── reference.html     # Reference tables and examples
│   │   ├── main.js           # Shared JavaScript functionality
│   │   └── styles.css        # Military-themed styling
│   ├── electron/             # Desktop application components
│   │   ├── main.js           # Electron main process
│   │   └── preload.js        # Security and API exposure
│   └── pwa/                  # Progressive Web App assets
│       ├── manifest.json     # PWA metadata
│       ├── service-worker.js # Offline functionality
│       └── icons/           # PWA icons (192x192, 512x512)
├── assets/                   # Static resources
│   ├── left.png             # Left logo
│   ├── right.png            # Right logo
│   ├── logo.ico             # Application icon
│   └── background.jpg       # Header background
├── config/                  # Configuration files
│   ├── forge.config.js      # Electron build configuration
│   └── capacitor.config.json # Mobile deployment config
├── package.json             # NPM dependencies and scripts
├── README.md               # This documentation
└── state.json              # Default application state
```

## Risk Assessment Framework

### Likelihood Scale (1-5)
1. **Very Improbable**: Event almost inconceivable, never occurred in aviation history
2. **Improbable**: Very unlikely, not known in company but occurred in industry
3. **Remote**: Unlikely but possible, occurred in company or seldom in industry
4. **Probable**: Likely to occur sometimes, has occurred in company
5. **Frequent**: Likely to occur many times, has occurred frequently

### Severity Scale (1-5)
1. **Negligible**: Minimal impact on mission, personnel, or equipment
2. **Minor**: Small impact, easily managed without significant consequences
3. **Major**: Significant impact requiring immediate attention and resources
4. **Critical**: Severe impact that could result in mission failure or serious injury
5. **Catastrophic**: Extreme impact resulting in loss of life, major equipment loss, or mission abort

### Risk Categories
1. **Planning**: Time management, briefing materials, threat assessment
2. **Event/Mission**: SOP compliance, mission specifications, environmental factors
3. **Asset/Resource**: Equipment status, crew qualifications, resource availability
4. **Comms/Supervision**: Communication systems, supervision, coordination
5. **Environment/Ground Facilities**: Weather, terrain, facilities, security

### Risk Calculation Formula
```
Risk Value = Likelihood × Severity - Deduction
Residual Risk Value = Risk Value - Mitigation Deductions
```

### Risk Categories by Score
- **1-4**: Low Risk (Accept risk, monitor as needed)
- **5-9**: Moderate Risk (Accept with controls, review periodically)
- **10-14**: High Risk (Require mitigation, supervisor approval)
- **15-20**: Very High Risk (Require immediate action, command approval)
- **21-25**: Extreme Risk (Mission abort/postpone, redesign required)

## Installation & Deployment

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- Git (for source control)

### Quick Start

1. **Clone Repository**
   ```bash
   git clone <repository-url>
   cd orm-v2-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Build Application**
   ```bash
   npm run build
   ```

### Deployment Options

#### Web Application
```bash
npm start
# Serves on http://localhost:3000
```

#### Desktop Application (Electron)
```bash
npm run electron
# Launches as standalone desktop application
```

#### Progressive Web App
```bash
npm run build
npm run pwa
# Serves PWA with offline capabilities
```

#### Production Build
```bash
npm run build
# Creates optimized build for deployment
```

## Usage Guide

### Mission Setup
1. **Enter Mission Details**:
   - Pilot name and code (required)
   - Second pilot information (optional)
   - Mechanic name (optional)
   - Mission date and type (required)

2. **Risk Assessment**:
   - Navigate through each risk category
   - Add specific risks with likelihood and severity ratings
   - Apply mitigation deductions where applicable
   - View real-time risk calculations

3. **Reference Materials**:
   - Access built-in hazard examples
   - Customize risk categories and examples
   - View detailed scale definitions

### Exporting Results
The application supports multiple export formats:

#### Excel (XLSX)
- Comprehensive risk assessment data
- Mission information and crew details
- Risk calculation breakdown
- Reference scales and definitions

#### CSV
- Lightweight format for data analysis
- Compatible with older Excel versions
- Structured data organization

#### PDF
- Professional report format
- Military-themed styling
- Printable documentation
- Fallback to HTML print for legacy systems

## Development

### Code Structure

#### Main Application (index.html)
- Tabbed interface for assessment and reference
- Responsive design with military aesthetics
- Integration with all sub-modules

#### Assessment Module (assessment.html)
- Dynamic risk entry forms
- Real-time calculation and validation
- Export functionality with multiple formats
- Form validation and user guidance

#### Reference Module (reference.html)
- Risk scale definitions and examples
- Customizable hazard database
- Modal interfaces for data management
- Persistent storage integration

#### Desktop Integration (electron/main.js)
- Cross-platform desktop application wrapper
- System tray integration
- File system access for exports
- Native window management

### Styling System
- **Color Scheme**: Military green (#4a6741) with dark theme (#1a1a1a)
- **Typography**: Monospace fonts for technical appearance
- **Animations**: Subtle transitions and hover effects
- **Responsive Design**: Mobile and desktop compatibility

### Data Management
- **LocalStorage**: Persistent user data and preferences
- **State Management**: JSON-based state serialization
- **Export Data**: Structured data organization for all formats

## Configuration

### Package.json Scripts
```json
{
  "scripts": {
    "start": "electron .",
    "build": "forge build",
    "pwa": "npm run build && serve src/web"
  }
}
```

### Electron Configuration (forge.config.js)
- Icon configuration and ASAR packaging
- Custom hooks for post-processing
- Cross-platform build settings

### PWA Configuration
- Service worker for offline functionality
- Manifest with military-themed metadata
- Icon generation for various resolutions

## Security Considerations

### Data Security
- Client-side data processing (no server requirements)
- Local storage encryption considerations
- Secure export file handling

### Application Security
- Electron security best practices
- Content security policy implementation
- Input validation and sanitization

### Military Compliance
- No external dependencies for offline operation
- Secure data export without cloud requirements
- Military-grade UI/UX standards

## Performance Optimization

### Loading Performance
- Optimized asset loading and caching
- Efficient DOM manipulation
- Minimal JavaScript bundle size

### Runtime Performance
- Real-time calculations with minimal lag
- Efficient data storage and retrieval
- Smooth animations and transitions

### Memory Management
- Proper event listener cleanup
- Efficient DOM updates
- Memory leak prevention

## Testing

### Manual Testing
- Cross-browser compatibility testing
- Mobile responsiveness validation
- Export functionality verification
- Form validation testing

### Automated Testing
- Unit tests for calculation functions
- Integration tests for export modules
- Performance benchmarking

### User Acceptance Testing
- Military user feedback integration
- Operational scenario validation
- Accessibility compliance testing

## Troubleshooting

### Common Issues

#### Application Won't Start
- Check Node.js and npm versions
- Verify all dependencies installed
- Check port availability for web server

#### Export Failures
- Verify file permissions
- Check available disk space
- Ensure export libraries loaded correctly

#### Display Issues
- Clear browser cache for web version
- Check screen resolution compatibility
- Verify CSS loading

### Debug Information
- Console logging for development
- Error handling with user feedback
- Performance monitoring tools

## Contributing

### Development Setup
1. Fork the repository
2. Create feature branch
3. Implement changes with tests
4. Submit pull request

### Code Standards
- ES6+ JavaScript with modern practices
- CSS3 with semantic class naming
- Accessible HTML structure
- Military-themed design consistency

### Testing Requirements
- Unit tests for new functionality
- Integration tests for major features
- Manual testing for UI changes
- Performance impact assessment

## Future Development

### Planned Features
- Mobile application support via Capacitor
- Advanced reporting and analytics
- Team collaboration features
- Integration with military systems

### Technical Improvements
- Performance optimization
- Enhanced security features
- Improved accessibility
- Better mobile experience

### Platform Expansion
- Native mobile applications
- Integration with military hardware
- Cloud-based collaboration tools
- Advanced data visualization

## Support & Maintenance

### Version History
- **v1.0.0**: Initial release with core ORM functionality

### Bug Reporting
- Use GitHub issues for bug reports
- Include reproduction steps
- Provide system information
- Attach relevant screenshots

### Feature Requests
- Submit via GitHub issues
- Include use case details
- Provide mockups if available
- Consider military operational requirements

## Legal & Compliance

### License
MIT License - see LICENSE file for details

### Military Standards
- Designed for military operational use
- No classified information handling
- Standard military risk assessment methodologies
- Compliance with operational security requirements

### Data Privacy
- No user data collection
- Local data storage only
- No external API dependencies
- User-controlled data export

## Contact & Support

### Development Team
- **Project Maintainer**: [Development Team]
- **Repository**: [GitHub Repository URL]
- **Issue Tracking**: [GitHub Issues]

### User Support
- **Documentation**: This README and inline help
- **Training Materials**: Available upon request
- **Technical Support**: Via GitHub issues

---

**ORM V2 Application** - Empowering Operational Risk Management with Military Precision

*31st Air Unit - Operational Excellence Through Technology*