"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Phone, Search } from "lucide-react"
import { SharedHeader } from "@/components/shared-header"
import { SharedFooter } from "@/components/shared-footer"

// Helper function to get product image path
const getProductImage = (brand: string, productName: string) => {
  const brandFolder = brand.toLowerCase().replace(' ', '-')
  const productSlug = productName.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-')
  return `/products/${brandFolder}/${brandFolder}-${productSlug}.jpg`
}

// Helper function to get default brand image
const getDefaultBrandImage = (brand: string) => {
  const brandFolder = brand.toLowerCase().replace(' ', '-')
  const extension = brand === "AMARON" ? "jpg" : "png"
  return `/products/${brandFolder}/${brandFolder}-default.${extension}`
}

// Products Data
const products = [
  // MICROTEK Products
  { brand: "MICROTEK", name: "Smart Hybrid 1000VA", model: "Smart Hybrid 1000VA", description: "Sine wave, IC-based, built-in bypass, noiseless, home use", image: getDefaultBrandImage("MICROTEK") },
  { brand: "MICROTEK", name: "Smart Hybrid 1500VA", model: "Smart Hybrid 1500VA", description: "Sine wave, IC-based, built-in bypass, silent operation", image: getDefaultBrandImage("MICROTEK") },
  { brand: "MICROTEK", name: "Smart Hybrid 650VA", model: "Smart Hybrid 650VA", description: "Sine wave, noiseless, efficiency optimized", image: getDefaultBrandImage("MICROTEK") },
  { brand: "MICROTEK", name: "Heavy Duty VTurbo 1250VA", model: "VTurbo 1250VA", description: "Pure sine wave, heavy/IT loads, built-in MCB", image: getDefaultBrandImage("MICROTEK") },
  { brand: "MICROTEK", name: "Heavy Duty VTurbo 2000VA", model: "VTurbo 2000VA", description: "Pure sine wave, heavy-duty, bypass feature", image: getDefaultBrandImage("MICROTEK") },
  { brand: "MICROTEK", name: "Elite 1500VA", model: "Elite 1500VA", description: "Pure sine wave, child-safe, battery enclosure, 3-year warranty", image: getDefaultBrandImage("MICROTEK") },
  { brand: "MICROTEK", name: "Luxe Wifi", model: "Luxe Wifi", description: "1400VA, pure sine wave, smartphone control", image: getDefaultBrandImage("MICROTEK") },
  { brand: "MICROTEK", name: "JUMBO SW 11000VAi", model: "JUMBO SW 11000VAi", description: "11000VA, pure sine wave, heavy load, 230V output", image: getDefaultBrandImage("MICROTEK") },
  { brand: "MICROTEK", name: "SEBz 1100VA", model: "SEBz 1100VA", description: "1100VA, pure sine wave, 12V, 560W output", image: getDefaultBrandImage("MICROTEK") },
  { brand: "MICROTEK", name: "Super Power 900", model: "Super Power 900", description: "Pure sine wave, overload and short circuit protection", image: getDefaultBrandImage("MICROTEK") },
  { brand: "MICROTEK", name: "Energy Saver 1250", model: "Energy Saver 1250", description: "Sine wave, energy efficient, supports fans, lights, computers", image: getDefaultBrandImage("MICROTEK") },
  { brand: "MICROTEK", name: "UPS JM SW 3000", model: "JM SW 3000", description: "Sine wave, mixed loads, digital LCD, advanced safety features", image: getDefaultBrandImage("MICROTEK") },
  { brand: "MICROTEK", name: "UPS JM SW 2000", model: "JM SW 2000", description: "2000VA, two 12V batteries, LCD digital display", image: getDefaultBrandImage("MICROTEK") },
  { brand: "MICROTEK", name: "Energy Saver 900", model: "Energy Saver 900", description: "Sine wave, supports multiple devices", image: getDefaultBrandImage("MICROTEK") },
  { brand: "MICROTEK", name: "LXI 1075", model: "LXI 1075", description: "Sine wave, compact body, 900W", image: getDefaultBrandImage("MICROTEK") },
  { brand: "MICROTEK", name: "Heavy Duty 1550", model: "V-Turbo 1550", description: "1250VA/12V, 1000 Watts, sinewave", image: getDefaultBrandImage("MICROTEK") },
  { brand: "MICROTEK", name: "Heavy Duty 2350", model: "V-Turbo 2350", description: "2000VA sinewave, LCD", image: getDefaultBrandImage("MICROTEK") },
  { brand: "MICROTEK", name: "Online UPS 2kVA", model: "IB-MAX", description: "High Frequency Online UPS, IGBT Based, 72V", image: getDefaultBrandImage("MICROTEK") },
  { brand: "MICROTEK", name: "Online UPS 6.0 KVA", model: "MAX+ 6KVA", description: "6.0 KVA Online UPS with Battery, IGBT-PWM switching", image: getDefaultBrandImage("MICROTEK") },
  { brand: "MICROTEK", name: "Elite MTKTV1K5S", model: "MTKTV1K5S", description: "1500 LCD 12V SW, fast charge, LCD display", image: getDefaultBrandImage("MICROTEK") },
  { brand: "MICROTEK", name: "SuperMAX+ 60 KVA", model: "SuperMAX+ 60KVA", description: "3:3 Phase Online UPS, 384-480V, pure sine wave output", image: getDefaultBrandImage("MICROTEK") },
  { brand: "MICROTEK", name: "Max+ 10 KVA UPS", model: "Max+ 10 KVA", description: "10 KVA online UPS, high efficiency system", image: getDefaultBrandImage("MICROTEK") },
  { brand: "MICROTEK", name: "Tuff Power Pro Plus 650VA", model: "Tuff Power Pro Plus", description: "650VA/360W, micro processor control", image: getDefaultBrandImage("MICROTEK") },
  { brand: "MICROTEK", name: "1250 Sine Wave Home UPS", model: "Home UPS 1250", description: "1250VA sine wave, reliable for home", image: getDefaultBrandImage("MICROTEK") },

  // LUMINOUS Products
  { brand: "LUMINOUS", name: "Zelio 1100", model: "Zelio 1100", description: "900VA, 756W, pure sine wave, smart display", image: getDefaultBrandImage("LUMINOUS") },
  { brand: "LUMINOUS", name: "Zelio Smart 1700", model: "Zelio Smart 1700", description: "1500VA, 1260W, LCD display", image: getDefaultBrandImage("LUMINOUS") },
  { brand: "LUMINOUS", name: "Zelio Wifi 1100", model: "Zelio Wifi 1100", description: "900VA, Wi-Fi, smartphone control", image: getDefaultBrandImage("LUMINOUS") },
  { brand: "LUMINOUS", name: "Inverter 1050", model: "Inverter 1050", description: "900VA, 756W, high surge protection, sine wave", image: getDefaultBrandImage("LUMINOUS") },
  { brand: "LUMINOUS", name: "NXG 1800", model: "NXG 1800", description: "1500VA, 1200W, solar hybrid ready, dual battery support", image: getDefaultBrandImage("LUMINOUS") },
  { brand: "LUMINOUS", name: "NXG 1150", model: "NXG 1150", description: "800VA, solar compatible", image: getDefaultBrandImage("LUMINOUS") },
  { brand: "LUMINOUS", name: "NXI 850", model: "NXI 850", description: "700VA, sine wave, efficient", image: getDefaultBrandImage("LUMINOUS") },
  { brand: "LUMINOUS", name: "Eco Watt Neo 950", model: "Eco Watt Neo 950", description: "900VA, square wave, 756W, ABCC charging", image: getDefaultBrandImage("LUMINOUS") },
  { brand: "LUMINOUS", name: "Eco Watt Neo 1050", model: "Eco Watt Neo 1050", description: "900VA, 756W, intelligent square wave", image: getDefaultBrandImage("LUMINOUS") },
  { brand: "LUMINOUS", name: "Eco Watt Neo 1650", model: "Eco Watt Neo 1650", description: "1500VA, 2x battery, intelligent charging", image: getDefaultBrandImage("LUMINOUS") },
  { brand: "LUMINOUS", name: "Eco Watt+ 1050VA", model: "Eco Watt+ 1050VA", description: "900VA, square wave, single battery", image: getDefaultBrandImage("LUMINOUS") },
  { brand: "LUMINOUS", name: "Eco Watt+ 1650", model: "Eco Watt+ 1650", description: "1500VA, 1260W, double battery support", image: getDefaultBrandImage("LUMINOUS") },
  { brand: "LUMINOUS", name: "Eco Watt+ 1250", model: "Eco Watt+ 1250", description: "1100VA, pure sine wave, robust", image: getDefaultBrandImage("LUMINOUS") },
  { brand: "LUMINOUS", name: "Eco Volt+ 850", model: "Eco Volt+ 850", description: "800VA, 588W, sine wave, single battery", image: getDefaultBrandImage("LUMINOUS") },
  { brand: "LUMINOUS", name: "Eco Volt Neo 1550", model: "Eco Volt Neo 1550", description: "1000VA, sine wave, single battery", image: getDefaultBrandImage("LUMINOUS") },
  { brand: "LUMINOUS", name: "Icon 1100", model: "Icon 1100", description: "900VA, sine wave, glossy body, smart load management", image: getDefaultBrandImage("LUMINOUS") },
  { brand: "LUMINOUS", name: "Icon 1600", model: "Icon 1600", description: "1400VA, sine wave, 3 years warranty", image: getDefaultBrandImage("LUMINOUS") },
  { brand: "LUMINOUS", name: "Optimus 2300", model: "Optimus 2300", description: "2000VA, sine wave, 1680W, LCD", image: getDefaultBrandImage("LUMINOUS") },
  { brand: "LUMINOUS", name: "Optimus 3800", model: "Optimus 3800", description: "3200VA, LCD, pure sine wave", image: getDefaultBrandImage("LUMINOUS") },
  { brand: "LUMINOUS", name: "Optimus 2800", model: "Optimus 2800", description: "2500VA, LCD, high output, sine wave", image: getDefaultBrandImage("LUMINOUS") },
  { brand: "LUMINOUS", name: "Optimus 1250", model: "Optimus 1250", description: "1100VA, sine wave, 3-year warranty", image: getDefaultBrandImage("LUMINOUS") },
  { brand: "LUMINOUS", name: "Optimus 4500+", model: "Optimus 4500+", description: "4000VA, high capacity range", image: getDefaultBrandImage("LUMINOUS") },
  { brand: "LUMINOUS", name: "Optimus 6500+", model: "Optimus 6500+", description: "5500VA, maximum capacity", image: getDefaultBrandImage("LUMINOUS") },
  { brand: "LUMINOUS", name: "Cruze+ 2KVA", model: "Cruze+ 2KVA", description: "2000VA, can run heavy loads", image: getDefaultBrandImage("LUMINOUS") },

  // SF SONIC Products
  { brand: "SF SONIC", name: "Prima P2200 UPS", model: "Prima P2200", description: "1 KVA, offline UPS, commercial usage, 2 years warranty", image: getDefaultBrandImage("SF SONIC") },
  { brand: "SF SONIC", name: "Prima P1500 UPS", model: "P1500", description: "Power backup UPS, <1 KVA, all battery compatible, home use", image: getDefaultBrandImage("SF SONIC") },
  { brand: "SF SONIC", name: "Prima 700 UPS", model: "Prima 700", description: "Commercial usage, offline UPS, compact design", image: getDefaultBrandImage("SF SONIC") },
  { brand: "SF SONIC", name: "KF00 040HKP035M", model: "KF00 040HKP035M", description: "Line interactive UPS, commercial usage", image: getDefaultBrandImage("SF SONIC") },
  { brand: "SF SONIC", name: "Solar Hybrid Inverter 1", model: "Solar Hybrid 1", description: "Solar hybrid inverter, pure sine wave, energy saving", image: getDefaultBrandImage("SF SONIC") },
  { brand: "SF SONIC", name: "Solar Hybrid Inverter 2", model: "Solar Hybrid 2", description: "Advanced solar hybrid, backup optimization", image: getDefaultBrandImage("SF SONIC") },
  { brand: "SF SONIC", name: "Solar Hybrid Inverter 3", model: "Solar Hybrid 3", description: "3-phase solar compatible, commercial power solution", image: getDefaultBrandImage("SF SONIC") },
  { brand: "SF SONIC", name: "Home UPS Digi-Sinewave", model: "Digi-Sinewave", description: "Pure sine wave, smart digital features", image: getDefaultBrandImage("SF SONIC") },
  { brand: "SF SONIC", name: "Home UPS Neo", model: "Neo", description: "Sinewave UPS, optimized for Indian power conditions", image: getDefaultBrandImage("SF SONIC") },
  { brand: "SF SONIC", name: "Home UPS Classic", model: "Classic", description: "Sinewave, heavy load support, classic model", image: getDefaultBrandImage("SF SONIC") },
  { brand: "SF SONIC", name: "Home UPS Smart", model: "Smart", description: "Smart home UPS, LCD display, energy saving", image: getDefaultBrandImage("SF SONIC") },
  { brand: "SF SONIC", name: "Home UPS Eco", model: "Eco", description: "Energy efficient, eco-friendly, traffic overload support", image: getDefaultBrandImage("SF SONIC") },
  { brand: "SF SONIC", name: "Home UPS Pro", model: "Pro", description: "Advanced overload protection, robust build", image: getDefaultBrandImage("SF SONIC") },
  { brand: "SF SONIC", name: "Home UPS Max", model: "Max", description: "High output, fast recharge, heavy load compatibility", image: getDefaultBrandImage("SF SONIC") },
  { brand: "SF SONIC", name: "Solar UPS Orion", model: "Orion", description: "Orion series, solar plus battery hybrid system", image: getDefaultBrandImage("SF SONIC") },
  { brand: "SF SONIC", name: "Solar UPS Draco", model: "Draco", description: "Compact hybrid, modern design, intelligent charging", image: getDefaultBrandImage("SF SONIC") },
  { brand: "SF SONIC", name: "Solar UPS Lyra", model: "Lyra", description: "Premium hybrid, digital control, heavy duty backup", image: getDefaultBrandImage("SF SONIC") },
  { brand: "SF SONIC", name: "Commercial UPS Serena", model: "Serena", description: "Commercial pure sinewave series, long service", image: getDefaultBrandImage("SF SONIC") },
  { brand: "SF SONIC", name: "Commercial UPS Tito", model: "Tito", description: "High wattage, fast switch-over, dual mode operation", image: getDefaultBrandImage("SF SONIC") },
  { brand: "SF SONIC", name: "UPS Flash Pro", model: "Flash Pro", description: "Quick switch, emergency backup ready", image: getDefaultBrandImage("SF SONIC") },
  { brand: "SF SONIC", name: "UPS Neo-smart", model: "Neo-smart", description: "Multimode inverter/UPS, adaptive output", image: getDefaultBrandImage("SF SONIC") },
  { brand: "SF SONIC", name: "UPS EverSafe", model: "EverSafe", description: "Extended protection, inbuilt surge control", image: getDefaultBrandImage("SF SONIC") },
  { brand: "SF SONIC", name: "UPS PowerMax", model: "PowerMax", description: "Max power rating, optimized for long outages", image: getDefaultBrandImage("SF SONIC") },

  // AMARON Products
  { brand: "AMARON", name: "Hi-Life Inverter", model: "Hi-Life Inverter", description: "Advanced digital inverter, reliable performance", image: getDefaultBrandImage("AMARON") },
  { brand: "AMARON", name: "Hi-Back Inverter", model: "Hi-Back Inverter", description: "Fast switch-over, efficient surge handling", image: getDefaultBrandImage("AMARON") },
  { brand: "AMARON", name: "HybridWave Inverter", model: "HybridWave", description: "Hybrid technology, digital waveform optimization", image: getDefaultBrandImage("AMARON") },
  { brand: "AMARON", name: "Inverter Star Pure Sine", model: "Star Pure Sine", description: "Pure sine wave, home/office use", image: getDefaultBrandImage("AMARON") },
  { brand: "AMARON", name: "GenPlus Inverter", model: "GenPlus", description: "General-purpose, compact, efficient", image: getDefaultBrandImage("AMARON") },
  { brand: "AMARON", name: "Home UPS 800VA", model: "UPS 800VA", description: "800VA, pure sinewave", image: getDefaultBrandImage("AMARON") },
  { brand: "AMARON", name: "Home UPS 1100VA", model: "UPS 1100VA", description: "1100VA, digital LCD, advanced protection", image: getDefaultBrandImage("AMARON") },
  { brand: "AMARON", name: "Home UPS 1500VA", model: "UPS 1500VA", description: "1500VA, sinewave, high capacity", image: getDefaultBrandImage("AMARON") },
  { brand: "AMARON", name: "Home UPS 2000VA", model: "UPS 2000VA", description: "Heavy duty, continuous backup solution", image: getDefaultBrandImage("AMARON") },
  { brand: "AMARON", name: "Solar Inverter 900VA", model: "Solar 900VA", description: "Solar compatible hybrid, 900VA, home/office", image: getDefaultBrandImage("AMARON") },
  { brand: "AMARON", name: "Solar Inverter 1500VA", model: "Solar 1500VA", description: "Solar hybrid, high PV support", image: getDefaultBrandImage("AMARON") },
  { brand: "AMARON", name: "DigiWave", model: "DigiWave", description: "Digital controller, advanced LCD display", image: getDefaultBrandImage("AMARON") },
  { brand: "AMARON", name: "PureWave", model: "PureWave", description: "Ultra pure sine wave inverter", image: getDefaultBrandImage("AMARON") },
  { brand: "AMARON", name: "WaveMax", model: "WaveMax", description: "Max efficiency, wave optimization", image: getDefaultBrandImage("AMARON") },
  { brand: "AMARON", name: "SuperSaver", model: "SuperSaver", description: "Eco mode, budget-friendly inverter", image: getDefaultBrandImage("AMARON") },
  { brand: "AMARON", name: "Commercial Pro Series", model: "Pro Series", description: "Commercial grade, industrial compatibility", image: getDefaultBrandImage("AMARON") },
  { brand: "AMARON", name: "Turbo Smart", model: "Turbo Smart", description: "High efficiency, rapid switching", image: getDefaultBrandImage("AMARON") },
  { brand: "AMARON", name: "Endura Inverter", model: "Endura", description: "Extended life, rugged build", image: getDefaultBrandImage("AMARON") },
  { brand: "AMARON", name: "PrimeWave", model: "PrimeWave", description: "Premium digital inverter, user-friendly controls", image: getDefaultBrandImage("AMARON") },
  { brand: "AMARON", name: "SmartHome Inverter", model: "SmartHome", description: "Smart inverter, home automation compatible", image: getDefaultBrandImage("AMARON") },
  { brand: "AMARON", name: "Quanta Inverter Series", model: "Quanta", description: "Quanta series, advanced safety, controller tech", image: getDefaultBrandImage("AMARON") },

  // LIVGUARD Products
  { brand: "LIVGUARD", name: "LSG900i Sinewave", model: "LSG900i", description: "Pure sinewave, 700VA, digital display", image: getDefaultBrandImage("LIVGUARD") },
  { brand: "LIVGUARD", name: "LGS1100i", model: "LGS1100i", description: "900VA hybrid inverter with LCD display", image: getDefaultBrandImage("LIVGUARD") },
  { brand: "LIVGUARD", name: "i-VERT Pro 1050", model: "i-Vert Pro 1050", description: "AI smart charging, sinewave", image: getDefaultBrandImage("LIVGUARD") },
  { brand: "LIVGUARD", name: "i-VERT Pro 1550", model: "i-Vert Pro 1550", description: "1500VA digital inverter", image: getDefaultBrandImage("LIVGUARD") },
  { brand: "LIVGUARD", name: "Hi-Power 2500", model: "Hi-Power 2500", description: "2000VA, heavy duty, hybrid controller", image: getDefaultBrandImage("LIVGUARD") },
  { brand: "LIVGUARD", name: "Pro 3000", model: "Pro 3000", description: "3KVA, advanced safety, heavy load", image: getDefaultBrandImage("LIVGUARD") },
  { brand: "LIVGUARD", name: "Power Series 2000", model: "Power 2000", description: "2KVA, smart monitoring, robust backup", image: getDefaultBrandImage("LIVGUARD") },
  { brand: "LIVGUARD", name: "Power Series 3000", model: "Power 3000", description: "3KVA, advanced safety, industrial use", image: getDefaultBrandImage("LIVGUARD") },
  { brand: "LIVGUARD", name: "MPPT Solar Inverter", model: "MPPT Solar", description: "MPPT charging, solar hybrid inverter", image: getDefaultBrandImage("LIVGUARD") },
  { brand: "LIVGUARD", name: "PWM Solar Inverter", model: "PWM Solar", description: "PWM charge control, solar ready", image: getDefaultBrandImage("LIVGUARD") },
  { brand: "LIVGUARD", name: "Digital Smart 800", model: "Smart 800", description: "800VA, digital LCD, quick switch", image: getDefaultBrandImage("LIVGUARD") },
  { brand: "LIVGUARD", name: "Heavy Duty iTuff Combo", model: "iTuff Combo", description: "High load, mixed appliances", image: getDefaultBrandImage("LIVGUARD") },
  { brand: "LIVGUARD", name: "Urban Combo", model: "Urban Combo", description: "Urban segment, compact, indoors", image: getDefaultBrandImage("LIVGUARD") },
  { brand: "LIVGUARD", name: "Eco Series Inverter", model: "Eco Series", description: "Home applications, reliable performance", image: getDefaultBrandImage("LIVGUARD") },
  { brand: "LIVGUARD", name: "Professional Hybrid", model: "Pro Hybrid", description: "Professional, commercial use", image: getDefaultBrandImage("LIVGUARD") },
  { brand: "LIVGUARD", name: "Advanced Digital Wave", model: "Advanced Wave", description: "LCD, advanced error reporting", image: getDefaultBrandImage("LIVGUARD") },
  { brand: "LIVGUARD", name: "FastCharge Inverter", model: "FastCharge", description: "Rapid charge technology, sine wave", image: getDefaultBrandImage("LIVGUARD") },
  { brand: "LIVGUARD", name: "PureSine Digital", model: "PureSine", description: "Clean sinewave, full appliance safety", image: getDefaultBrandImage("LIVGUARD") },
  { brand: "LIVGUARD", name: "BMS Smart Inverter", model: "BMS Smart", description: "Battery management, digital controls", image: getDefaultBrandImage("LIVGUARD") },
  { brand: "LIVGUARD", name: "LongBackup Inverter", model: "LongBackup", description: "Extended backup, energy efficient", image: getDefaultBrandImage("LIVGUARD") },
  { brand: "LIVGUARD", name: "SmartHome Inverter", model: "SmartHome", description: "Home automation enabled", image: getDefaultBrandImage("LIVGUARD") },

  // EXIDE Products
  { brand: "EXIDE", name: "Inverterz GQP 12V 650VA", model: "GQP650", description: "650VA, pure sinewave, digital display", image: getDefaultBrandImage("EXIDE") },
  { brand: "EXIDE", name: "Inverterz GQP 12V 850VA", model: "GQP850", description: "850VA, pure sinewave, advanced tech", image: getDefaultBrandImage("EXIDE") },
  { brand: "EXIDE", name: "Inverterz GQP 12V 1050VA", model: "GQP1050", description: "1050VA, pure sinewave, home UPS", image: getDefaultBrandImage("EXIDE") },
  { brand: "EXIDE", name: "Inverterz GQP 24V 1450VA", model: "GQP1450", description: "1450VA, pure sinewave, dual battery", image: getDefaultBrandImage("EXIDE") },
  { brand: "EXIDE", name: "Star 1125 Home UPS", model: "Star 1125", description: "1125VA, sinewave, digital notification", image: getDefaultBrandImage("EXIDE") },
  { brand: "EXIDE", name: "Magic Digital UPS", model: "Magic", description: "Smart controller, adaptive modes", image: getDefaultBrandImage("EXIDE") },
  { brand: "EXIDE", name: "Pure Sinewave 2000VA", model: "PS2000", description: "2000VA, pure sinewave, LCD panel", image: getDefaultBrandImage("EXIDE") },
  { brand: "EXIDE", name: "Pro Series UPS", model: "Pro Series", description: "Advanced safety features, efficiency", image: getDefaultBrandImage("EXIDE") },
  { brand: "EXIDE", name: "DigiSmart 1500", model: "DigiSmart 1500", description: "1500VA, digital LCD, fast changeover", image: getDefaultBrandImage("EXIDE") },
  { brand: "EXIDE", name: "Inverterz Magic Plus", model: "Magic Plus", description: "Next gen controller, sinewave output", image: getDefaultBrandImage("EXIDE") },
  { brand: "EXIDE", name: "Inverterz Star Sinewave", model: "Star Sinewave", description: "1000VA, pure sinewave, home office", image: getDefaultBrandImage("EXIDE") },
  { brand: "EXIDE", name: "EcoSmart Series", model: "EcoSmart", description: "Optimized for low power needs", image: getDefaultBrandImage("EXIDE") },
  { brand: "EXIDE", name: "Digital Home UPS", model: "Digital Home UPS", description: "All digital interface, sinewave", image: getDefaultBrandImage("EXIDE") },
  { brand: "EXIDE", name: "Solar Hybrid Inverter", model: "Solar Hybrid", description: "Solar grid inverter, hybrid charging", image: getDefaultBrandImage("EXIDE") },
  { brand: "EXIDE", name: "AllGuard Smart Inverter", model: "AllGuard", description: "High overload protection, digital UI", image: getDefaultBrandImage("EXIDE") },
  { brand: "EXIDE", name: "QuickSwitch UPS", model: "QuickSwitch", description: "Fast transfer, enhanced life", image: getDefaultBrandImage("EXIDE") },
  { brand: "EXIDE", name: "Nova Series Inverter", model: "Nova", description: "Nova controller, large display", image: getDefaultBrandImage("EXIDE") },
  { brand: "EXIDE", name: "Heavy Duty Home UPS", model: "Heavy Duty", description: "Rugged for commercial/home use", image: getDefaultBrandImage("EXIDE") },
  { brand: "EXIDE", name: "MaxSafe Sinewave", model: "MaxSafe", description: "Extended safe performance, sinewave", image: getDefaultBrandImage("EXIDE") },
  { brand: "EXIDE", name: "Endura Inverter", model: "Endura", description: "Tough build, reliable performance", image: getDefaultBrandImage("EXIDE") },
  { brand: "EXIDE", name: "Rapid Voltage Inverter", model: "Rapid Voltage", description: "Rapid voltage matching, secure design", image: getDefaultBrandImage("EXIDE") },

  // LIVFAST Products
  { brand: "LIVFAST", name: "SmartFlash Inverter", model: "SmartFlash", description: "Smart features, fast charge, bypass", image: getDefaultBrandImage("LIVFAST") },
  { brand: "LIVFAST", name: "PS2500 Pure Sine Wave", model: "PS 2500", description: "2500VA/24V, 10hrs backup, sinewave", image: getDefaultBrandImage("LIVFAST") },
  { brand: "LIVFAST", name: "FCS 1725 Sine Wave", model: "FCS 1725", description: "1100VA/12V, sophisticated tech", image: getDefaultBrandImage("LIVFAST") },
  { brand: "LIVFAST", name: "FCS 1625 Sine Wave", model: "FCS 1625", description: "1500VA/12V, advanced series", image: getDefaultBrandImage("LIVFAST") },
  { brand: "LIVFAST", name: "Flashcharge FCS 2300VA", model: "FCS 2300VA", description: "2100VA, auto reset, protection", image: getDefaultBrandImage("LIVFAST") },
  { brand: "LIVFAST", name: "Power Station PS 5000", model: "PS 5000", description: "5000VA/48V, industrial load", image: getDefaultBrandImage("LIVFAST") },
  { brand: "LIVFAST", name: "Solar UPS LFS SO1150", model: "SO1150", description: "900VA, solar, RTC, pure sine wave", image: getDefaultBrandImage("LIVFAST") },
  { brand: "LIVFAST", name: "Solar UPS LFS SO1850", model: "SO1850", description: "1500VA, quick charging, solar", image: getDefaultBrandImage("LIVFAST") },
  { brand: "LIVFAST", name: "Solar UPS LFS SO2250", model: "SO2250", description: "2000VA, 50A solar charge cntl.", image: getDefaultBrandImage("LIVFAST") },
  { brand: "LIVFAST", name: "Digital Smart 900VA", model: "Smart 900", description: "Digital, compact, modern", image: getDefaultBrandImage("LIVFAST") },
  { brand: "LIVFAST", name: "Pro Series Home Inverter", model: "Pro Series", description: "Premium grade, robust design", image: getDefaultBrandImage("LIVFAST") },
  { brand: "LIVFAST", name: "Urban Series Inverter", model: "Urban Series", description: "Urban, compact, fast start", image: getDefaultBrandImage("LIVFAST") },
  { brand: "LIVFAST", name: "Residential Inverter", model: "Residential", description: "Home, LCD management, safe", image: getDefaultBrandImage("LIVFAST") },
  { brand: "LIVFAST", name: "Industrial Pro", model: "Industrial Pro", description: "Commercial duty, 3-phase compatible", image: getDefaultBrandImage("LIVFAST") },
  { brand: "LIVFAST", name: "Pure Sinewave XP", model: "Sinewave XP", description: "Consistent power, pure sinewave", image: getDefaultBrandImage("LIVFAST") },
  { brand: "LIVFAST", name: "Hybrid Solar Inverter", model: "Hybrid Solar", description: "Grid/solar, adjustable output", image: getDefaultBrandImage("LIVFAST") },
  { brand: "LIVFAST", name: "PowerHouse 3000VA", model: "PowerHouse 3000", description: "3KVA, large load, dual output", image: getDefaultBrandImage("LIVFAST") },
  { brand: "LIVFAST", name: "QuickStart Digital", model: "QuickStart Digital", description: "Quick startup, digital display", image: getDefaultBrandImage("LIVFAST") },
  { brand: "LIVFAST", name: "Nova All-in-One", model: "Nova", description: "All-in-one, UPS+Inverter", image: getDefaultBrandImage("LIVFAST") },
  { brand: "LIVFAST", name: "High Performance 2000VA", model: "Performance 2000", description: "2000VA, enhanced efficiency" }
]

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const urlBrand = searchParams.get('brand')
  
  const brands = ["ALL", "MICROTEK", "LUMINOUS", "SF SONIC", "AMARON", "LIVGUARD", "EXIDE", "LIVFAST"]
  
  const [selectedBrand, setSelectedBrand] = useState<string>("ALL")
  const [searchTerm, setSearchTerm] = useState<string>("")
  
  // Set brand from URL parameter when component mounts
  useEffect(() => {
    if (urlBrand && brands.includes(urlBrand)) {
      setSelectedBrand(urlBrand)
    }
  }, [urlBrand])

  const filteredProducts = products.filter(product => {
    const matchesBrand = selectedBrand === "ALL" || product.brand === selectedBrand
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesBrand && matchesSearch
  })

  return (
    <div className="min-h-screen bg-background">
      <SharedHeader />

      {/* Products Hero with Search and Filter */}
      <section className="pt-16 pb-8 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Product Catalog</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Complete range of inverters and UPS systems from leading brands - {filteredProducts.length} products available
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-8 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 z-10" />
              <Input
                type="text"
                placeholder="Search products by name, model, or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {brands.map(brand => (
                <Button
                  key={brand}
                  variant={selectedBrand === brand ? "default" : "outline"}
                  onClick={() => setSelectedBrand(brand)}
                  className="text-sm"
                >
                  {brand}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 group">
                <div className="h-48 bg-gray-100 rounded-t-lg overflow-hidden">
                  <img
                    src={product.image}
                    alt={`${product.brand} ${product.name}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = getDefaultBrandImage(product.brand)
                    }}
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {product.brand}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-sm font-medium text-muted-foreground">
                    Model: {product.model}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {product.description}
                  </p>
                  <a href="tel:+919962861772">
                    <Button className="w-full hover:scale-105 transition-transform duration-200">
                      <Phone className="mr-2 h-4 w-4" />
                      Contact for Price
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No products found matching your criteria.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Try adjusting your search or filter selection.
              </p>
            </div>
          )}
        </div>
      </section>

      <SharedFooter />
    </div>
  )
}
