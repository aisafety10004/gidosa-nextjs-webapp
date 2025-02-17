"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              스마트한 안전지도 관리로
              <br />
              <span className="text-primary">더 안전한 도시</span>를 만듭니다
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              실시간 데이터 분석과 AI 기술로 도시의 안전을 더욱 스마트하게 관리하세요.
              안전지도 스마트 관리 시스템으로 효율적인 의사결정을 지원합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">무료로 시작하기</Button>
              <Button size="lg" variant="outline">
                자세히 알아보기
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/800/600"
                alt="Safety Map Dashboard"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 