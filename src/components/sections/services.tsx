"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MapPin, Shield, LineChart, Users } from "lucide-react";

const services = [
  {
    title: "실시간 위험 모니터링",
    description:
      "24시간 실시간으로 도시의 안전 상태를 모니터링하고 즉각적인 대응이 가능합니다.",
    icon: Shield,
  },
  {
    title: "데이터 기반 분석",
    description:
      "빅데이터 분석을 통해 안전 취약 지역을 파악하고 예방적 조치를 취할 수 있습니다.",
    icon: LineChart,
  },
  {
    title: "스마트 매핑",
    description:
      "AI 기술을 활용한 스마트 매핑으로 안전 정보를 직관적으로 시각화합니다.",
    icon: MapPin,
  },
  {
    title: "협업 시스템",
    description:
      "유관기관과의 실시간 정보 공유 및 협업으로 신속한 대응이 가능합니다.",
    icon: Users,
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">주요 서비스</h2>
          <p className="text-muted-foreground">
            안전지도 스마트 관리 시스템의 핵심 서비스를 소개합니다
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <service.icon className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 