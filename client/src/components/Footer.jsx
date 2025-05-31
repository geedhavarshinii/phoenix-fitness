// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-white border-t border-pink-200 py-6 text-center">
      <p className="text-sm text-gray-600">
        © {new Date().getFullYear()} Phoenix Fitness Centre. All rights reserved.
      </p>
    </footer>
  );
}
