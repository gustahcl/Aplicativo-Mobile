import React from 'react';
import { View, Text, Image, ScrollView, SafeAreaView, Linking, TouchableOpacity } from 'react-native';

// --- Ícones SVG (react-native-svg) ---
// Certifique-se de que está instalado: npx expo install react-native-svg
import Svg, { Path, Rect, Circle } from 'react-native-svg';

// ===================================================================
// 1. DEFINIÇÃO DOS ÍCONES (COM PROP 'color' EM VEZ DE 'className')
// ===================================================================

const Mail = ({ size = 20, color = 'currentColor' }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color} // Alterado de className para stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <Rect width="20" height="16" x="2" y="4" rx="2" />
    <Path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </Svg>
);

const Linkedin = ({ size = 20, color = 'currentColor' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <Path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <Rect width="4" height="12" x="2" y="9" />
    <Circle cx="4" cy="4" r="2" />
  </Svg>
);

const Github = ({ size = 20, color = 'currentColor' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <Path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-4A5 5 0 0 0 18 2h-3.5a4.5 4.5 0 0 0-1 0H10a4.5 4.5 0 0 0-1 0H5.5a5 5 0 0 0-1.5 3A5.5 5.5 0 0 0 2.5 12c0 5 3 6.5 6 6.5a4.8 4.8 0 0 0-1 3.5v4" />
  </Svg>
);

const Briefcase = ({ size = 24, color = 'currentColor' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <Rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
    <Path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </Svg>
);

const GraduationCap = ({ size = 24, color = 'currentColor' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <Path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <Path d="M6 12v5c3.3 1 7 1 10 0v-5" />
  </Svg>
);

const Wrench = ({ size = 24, color = 'currentColor' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <Path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.4 1.4a1 1 0 0 0 1.4 0l3.5-3.5a1 1 0 0 0 0-1.4l-1.4-1.4a1 1 0 0 0-1.4 0L14.7 6.3z" />
    <Path d="M9.5 11.5 3 18c-2 2 0 4 2 2l6.5-6.5" />
    <Path d="m14 10 6 6" />
  </Svg>
);


// ===================================================================
// 2. DADOS DO CURRÍCULO
// ===================================================================
const profile = {
  name: "GUSTAVO HENRIQUE CUSTÓDIO DE LIMA",
  title: "Estagiário em Desenvolvimento de Sistemas e Análise de Dados",
  // IMPORTANTE: Coloque a sua imagem na pasta 'assets' 
  // e mude o nome do ficheiro abaixo!
  imageUrl: require('./assets/WhatsApp Image 2025-11-04 at 09.12.39.jpeg'),
  email: "guustavo.henrique.c.l12@gmail.com",
  linkedin: "https://www.linkedin.com/in/gustavo-henrique-a8279a236/", // Link corrigido
  github: "https://github.com/gustahcl", // Link corrigido
  summary: "Busco contribuir com soluções inovadoras e escaláveis, enquanto desenvolvo minhas habilidades técnicas em um ambiente colaborativo.",
  education: {
    course: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    institution: "Faculdade Senac Pernambuco",
    period: "Ago 2024 – Dez 2026 (Previsão)",
  },
  skills: [
    "Python", "Power BI", "Excel",
    "JavaScript", "TypeScript", "Node.js", "React",
    "HTML5", "CSS3", "MySQL", "APIs REST",
    "GitHub", "Figma", "Trello", "SAP", "Miro", "React Native (em aprendizado)"
  ],
  experiences: [
    {
      role: "Líder de Desenvolvimento",
      project: "Projeto Point – App de eventos regionais",
      period: "Set 2024 – Dez 2024",
      techs: "React, Python, MySQL, Power BI, Figma",
    },
    {
      role: "Desenvolvedor Front-End e Designer de Interface",
      project: "Projeto Arcomix – Sistema de Controle de Acesso",
      period: "Fev 2025 – Jun 2025",
      techs: "HTML5, CSS3, JavaScript, Figma, Trello, Miro",
    },
    {
      role: "Designer e Desenvolvedor de Protótipo",
      project: "Projeto Lanças e Alfaias – KickOff 2024.2",
      period: "Set 2024 – Nov 2024",
      techs: "Figma, Scrum, Miro, Trello",
    },
    {
      role: "Assistente Administrativo",
      project: "Alpha Plast – Setor Fiscal",
      period: "Set 2023 – Set 2024",
      techs: "SAP, Excel, PowerPoint, Power BI",
    },
  ],
};

// ===================================================================
// 3. DEFINIÇÃO DOS COMPONENTES DA UI
// ===================================================================

// TypeScript: Definindo os tipos das 'props'
type SectionCardProps = {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
};

const SectionCard = ({ title, icon, children }: SectionCardProps) => (
  <View className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
    <View className="p-4">
      <View className="flex-row items-center space-x-3 mb-3">
        {icon}
        <Text className="text-xl font-bold text-gray-800">{title}</Text>
      </View>
      <View className="text-gray-700">{children}</View>
    </View>
  </View>
);

const ProfileHeader = () => (
  <View className="bg-white rounded-xl shadow-md overflow-hidden mb-6 p-5 items-center">
    <Image
      className="w-32 h-32 rounded-full mb-4 border-4 border-blue-400"
      source={profile.imageUrl} 
    />
    <Text className="text-2xl font-bold text-gray-900 text-center">{profile.name}</Text>
    <Text className="text-md text-blue-600 font-medium text-center">{profile.title}</Text>
    <Text className="text-sm text-gray-600 mt-2 px-4 text-center">{profile.summary}</Text>
    
    <View className="mt-4 flex-col space-y-2 items-center text-sm text-gray-700">
      <TouchableOpacity onPress={() => Linking.openURL(`mailto:${profile.email}`)} className="flex-row items-center space-x-2">
        <Mail size={16} color="#6b7280" /> {/* text-gray-500 */}
        <Text className="text-gray-700">{profile.email}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL(profile.linkedin)} className="flex-row items-center space-x-2">
        <Linkedin size={16} color="#6b7280" /> {/* text-gray-500 */}
        <Text className="text-blue-600">linkedin.com/in/gustavo-henrique-a8279a236/</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL(profile.github)} className="flex-row items-center space-x-2">
        <Github size={16} color="#6b7280" /> {/* text-gray-500 */}
        <Text className="text-blue-600">github.com/gustahcl</Text>
      </TouchableOpacity>
    </View>
  </View>
);

// TypeScript: Definindo o tipo da 'prop' item
type ExperienceItemProps = {
  item: {
    role: string;
    project: string;
    period: string;
    techs: string;
  };
};

const ExperienceItem = ({ item }: ExperienceItemProps) => (
  <View className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
    <Text className="font-bold text-blue-700">{item.role}</Text>
    <Text className="font-semibold text-gray-800">{item.project}</Text>
    <Text className="text-sm text-gray-500 italic mb-2">{item.period}</Text>
    <View className="flex-row flex-wrap gap-2">
      {item.techs.split(', ').map(tech => (
        <View key={tech} className="bg-blue-100 px-2 py-1 rounded-full">
          <Text className="text-xs text-blue-800">{tech}</Text>
        </View>
      ))}
    </View>
  </View>
);


// ===================================================================
// 4. FUNÇÃO PRINCIPAL (APP)
// ===================================================================
export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView className="p-4">
        
        <ProfileHeader />

        {/* Passei a cor #2563eb (blue-600) diretamente para os ícones */}
        <SectionCard title="Formação Acadêmica" icon={<GraduationCap color="#2563eb" />}>
          <Text className="font-semibold">{profile.education.course}</Text>
          <Text>{profile.education.institution}</Text>
          <Text className="text-sm text-gray-500 italic">{profile.education.period}</Text>
        </SectionCard>

        <SectionCard title="Habilidades Técnicas" icon={<Wrench color="#2563eb" />}>
          <View className="flex-row flex-wrap gap-2">
            {profile.skills.map(skill => (
              <View key={skill} className="bg-gray-200 px-3 py-1 rounded-full">
                <Text className="text-sm text-gray-800 font-medium">
                  {skill}
                </Text>
              </View>
            ))}
          </View>
        </SectionCard>

        <SectionCard title="Experiências Relevantes" icon={<Briefcase color="#2563eb" />}>
          {profile.experiences.map((exp, index) => (
            <ExperienceItem key={index} item={exp} />
          ))}
        </SectionCard>

      </ScrollView>
    </SafeAreaView>
  );
}