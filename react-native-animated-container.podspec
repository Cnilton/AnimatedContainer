Pod::Spec.new do |s|
  s.name             = 'AnimatedContainer'
  s.version          = '1.0.0'
  s.summary          = 'A React Native animated component for dynamically adjusting height based on content inside a ScrollView.'

  s.description      = <<-DESC
    AnimatedContainer is a React Native component that adjusts its height based on the content inside a ScrollView. It provides smooth animations using react-native-reanimated.
  DESC

  s.homepage         = 'https://github.com/Cnilton/animated-container'
  s.license          = 'MIT'
  s.author           = { 'Caio Nilton' => 'caioniltonlemosbarroso@gmail.com' }
  s.platforms        = { :ios => '10.0' }
  s.source           = { :git => 'https://github.com/Cnilton/animated-container.git', :tag => s.version.to_s }

  s.source_files = 'path/to/your/source/files', '*.{js,jsx,ts,tsx}'
  s.dependency 'React', '>= 0.63'
  s.dependency 'react-native-reanimated', '>= 2.0.0'

  # Specify any additional dependencies here

  # s.resource_bundles = {
  #   'AnimatedContainer' => ['path/to/assets']
  # }

  # s.swift_version = '5.0'
end
