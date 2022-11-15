/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

const {fbInternalOnly, fbContent} = require('docusaurus-plugin-internaldocs-fb/internal');

module.exports = {
  main: {
    Features: [
      'features/index',
      'features/share-flipper-data',
      'features/react-native',
      {
        Plugins: [
          {
            type: 'autogenerated',
            dirName: 'features/plugins',
          },
        ],
      },
      ...fbInternalOnly(['fb/plugins']),
    ],
    Setup: [
      'getting-started/index',
      {
        'Adding Flipper to your App': [
          ...fbContent({
            external: [
              'getting-started/android-native',
              'getting-started/ios-native',
            ],
            internal: [
              {
                Android: [
                  'fb/Add-flipper-to-android-app',
                  'getting-started/android-native',
                ],
                iOS: [
                  'fb/Adding-flipper-to-ios-app',
                  'getting-started/ios-native',
                ],
              },
            ],
          }),
          {
            'React Native': [
              'getting-started/react-native',
              'getting-started/react-native-android',
              'getting-started/react-native-ios',
            ],
          },
          'getting-started/javascript',
        ],
      },
      ...fbInternalOnly(['getting-started/fb/connecting-to-flipper']),
      ...fbInternalOnly(['getting-started/fb/flipper-on-demand']),
      {
        Troubleshooting: [
          'getting-started/troubleshooting/troubleshooting',
          'getting-started/troubleshooting/general',
          'getting-started/troubleshooting/android',
          'getting-started/troubleshooting/ios',
          'getting-started/troubleshooting/react-native',
        ],
      },
      {
        'Other Platforms': [
          'extending/new-clients',
          'extending/establishing-a-connection',
          'extending/supporting-layout',
        ],
      },
      {
        'Plugin Setup': [
          {
            type: 'autogenerated',
            dirName: 'setup/plugins',
          },
        ],
      },
      {
        Advanced: [
          'custom-ports',
          'stetho',
          ...fbInternalOnly(['fb/www-certificate-exchange']),
        ],
      },
    ],
    'Creating Plugins': [
      'tutorial/intro',
      'tutorial/ios',
      'tutorial/android',
      'tutorial/react-native',
      'tutorial/javascript',
      {
        'Building a Desktop Plugin': [
          'tutorial/js-setup',
          'tutorial/js-table',
          'tutorial/js-custom',
        ],
      },
      'tutorial/js-publishing',
      {
        'Development Workflow': [
          'extending/dev-setup',
          'extending/loading-custom-plugins',
          'extending/desktop-plugin-structure',
          'extending/testing',
          'extending/debugging',
          ...fbInternalOnly([
            'fb/adding-analytics-0',
            'extending/fb/plugin-documentation',
          ]),
          'extending/plugin-distribution',
          'extending/sandy-migration',
        ],
      },
      {
        'Desktop Plugin APIs': [
          'extending/flipper-plugin',
          'extending/styling-components',
          'extending/style-guide',
          'extending/deeplinks',
          'extending/node-apis',
          ...fbInternalOnly([
            {
              'QPL Linting': ['fb/building-a-linter', 'fb/active-linters'],
            },
          ]),
        ],
      },
      {
        'Client Plugin APIs': [
          'extending/create-plugin',
          'extending/error-handling',
          'extending/arch',
          'extending/client-plugin-lifecycle',
          'extending/layout-inspector',
        ],
      },
    ],
    'Under the Hood': [
      'internals/index',
      'internals/contributing',
      {
        'Contributing to the Documentation': ['internals/documentation-formatting', 'internals/documentation-writing-guide'],
      },
      'internals/device-identifiers',
      'internals/linters',
      'extending/public-releases',
      'extending/testing-rn',
      ...fbInternalOnly([
        {
          "Meta": [
            'fb/arc_uiqr',
            'fb/connections',
            {
              'Data Pipelines': [
                'fb/flipper-analytics',
                'fb/scribe',
                'fb/error-logging',
              ]
            },
            'fb/Electron-Upgrade',
            {
              'Launcher': [
                'fb/hacking-on-launcher',
                'fb/LauncherConfig',
              ]
            },
            'fb/bundling',
            'fb/Navigation-Plugin-Development-Guide',
            {
              'Releases': [
                'fb/Flipper-Release-Cycle',
                'fb/release-infra',
                'fb/Flipper-fbsource-Pinning',
              ]
            },
            {
              'Sandcastle': [
                'fb/sandcastle-overview',
                'fb/sandcastle',
              ]
            },
            {
              'Support': [
                'fb/Alerts',
                'fb/Add-Support-Group-to-Flipper-Support-Form',
                'fb/Oncall-Runbook',
              ]
            },
            'fb/Star-Ratings',
            'fb/async-testing',
          ]
        }
      ]),
    ],
  },
};
