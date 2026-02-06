"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simular envio do formulário
      console.log("Formulário enviado:", formData);

      // Aqui você pode integrar com um serviço de email real
      // await fetch("/api/send-email", { method: "POST", body: JSON.stringify(formData) })

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });

      // Limpar mensagem de sucesso após 5 segundos
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto space-y-4 sm:space-y-6 md:space-y-8">
      {/* Mensagem de Sucesso */}
      {submitStatus === "success" && (
        <div className="p-3 sm:p-4 md:p-6 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm sm:text-base text-green-800 font-semibold">
            ✓ Mensagem enviada com sucesso! Entraremos em contato em breve.
          </p>
        </div>
      )}

      {/* Mensagem de Erro */}
      {submitStatus === "error" && (
        <div className="p-3 sm:p-4 md:p-6 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm sm:text-base text-red-800 font-semibold">
            ✗ Erro ao enviar mensagem. Por favor, tente novamente.
          </p>
        </div>
      )}

      {/* Nome */}
      <div>
        <label className="block text-xs sm:text-sm font-semibold text-[#D32F2F] mb-2 md:mb-3">
          Nome Completo *
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-[#D32F2F] focus:ring-2 focus:ring-[#D32F2F] focus:ring-opacity-20 transition-colors"
          placeholder="Seu nome"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-xs sm:text-sm font-semibold text-[#D32F2F] mb-2 md:mb-3">
          Email *
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-[#D32F2F] focus:ring-2 focus:ring-[#D32F2F] focus:ring-opacity-20 transition-colors"
          placeholder="seu.email@exemplo.com"
        />
      </div>

      {/* Telefone */}
      <div>
        <label className="block text-xs sm:text-sm font-semibold text-[#D32F2F] mb-2 md:mb-3">
          Telefone
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-[#D32F2F] focus:ring-2 focus:ring-[#D32F2F] focus:ring-opacity-20 transition-colors"
          placeholder="(XX) XXXX-XXXX"
        />
      </div>

      {/* Empresa */}
      <div>
        <label className="block text-xs sm:text-sm font-semibold text-[#D32F2F] mb-2 md:mb-3">
          Empresa/Organização
        </label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-[#D32F2F] focus:ring-2 focus:ring-[#D32F2F] focus:ring-opacity-20 transition-colors"
          placeholder="Sua empresa"
        />
      </div>

      {/* Assunto */}
      <div>
        <label className="block text-xs sm:text-sm font-semibold text-[#D32F2F] mb-2 md:mb-3">
          Assunto *
        </label>
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-[#D32F2F] focus:ring-2 focus:ring-[#D32F2F] focus:ring-opacity-20 transition-colors"
        >
          <option value="">Selecione um assunto</option>
          <option value="vendas">Vendas e Produtos</option>
          <option value="parceria">Parceria Comercial</option>
          <option value="rastreabilidade">Rastreabilidade</option>
          <option value="sustentabilidade">Sustentabilidade</option>
          <option value="outro">Outro</option>
        </select>
      </div>

      {/* Mensagem */}
      <div>
        <label className="block text-xs sm:text-sm font-semibold text-[#D32F2F] mb-2 md:mb-3">
          Mensagem *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-[#D32F2F] focus:ring-2 focus:ring-[#D32F2F] focus:ring-opacity-20 resize-none transition-colors"
          placeholder="Sua mensagem..."
        />
      </div>

      {/* Botão Enviar */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-[#D32F2F] text-white font-semibold rounded-lg hover:bg-[#B71C1C] active:bg-[#A01818] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        >
          {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
        </button>
      </div>

      <p className="text-xs sm:text-sm text-black text-center mt-4 sm:mt-6">
        * Campos obrigatórios
      </p>
    </form>
  );
}
