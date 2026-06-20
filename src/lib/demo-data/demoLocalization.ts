import type { DemoLocale } from "@/lib/i18n/direction";

export type LocalizedDemoCopy = {
  approvalMessage: string;
  companyName: string;
  dashboardTitle: string;
  emptyState: string;
  primaryCta: string;
  secondaryCta: string;
  statusLabel: string;
};

export const demoCopy: Record<"en" | "fa" | "ar", LocalizedDemoCopy> = {
  en: {
    companyName: "Novara Group",
    dashboardTitle: "AI Employee Dashboard",
    primaryCta: "Create AI Employee",
    secondaryCta: "Browse Marketplace",
    statusLabel: "Needs Review",
    emptyState: "No workflows have been activated yet.",
    approvalMessage: "This change requires security admin approval before launch.",
  },
  fa: {
    companyName: "گروه نووارا",
    dashboardTitle: "داشبورد کارکنان هوش مصنوعی",
    primaryCta: "ساخت کارمند هوش مصنوعی",
    secondaryCta: "مشاهده بازارچه",
    statusLabel: "نیازمند بررسی",
    emptyState: "هنوز هیچ گردش کاری فعال نشده است.",
    approvalMessage: "این تغییر برای اجرا نیاز به تایید مدیر امنیت دارد.",
  },
  ar: {
    companyName: "مجموعة نوفارا",
    dashboardTitle: "لوحة موظفي الذكاء الاصطناعي",
    primaryCta: "إنشاء موظف ذكاء اصطناعي",
    secondaryCta: "استعراض السوق",
    statusLabel: "بحاجة إلى مراجعة",
    emptyState: "لم يتم تفعيل أي سير عمل بعد.",
    approvalMessage: "يتطلب هذا التغيير موافقة مسؤول الأمان قبل التشغيل.",
  },
};

export function getLocalizedDemoCopy(locale: DemoLocale | string): LocalizedDemoCopy {
  const language = locale.split("-")[0];

  if (language === "fa" || language === "ar") {
    return demoCopy[language];
  }

  return demoCopy.en;
}
