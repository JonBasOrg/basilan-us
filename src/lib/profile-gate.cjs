function canDisplay(entry, review = false) {
 return !!entry && (entry.approval === 'approved' && entry.confidentiality === 'public' || review && entry.approval === 'pending' && entry.confidentiality === 'public-candidate');
}
module.exports = { canDisplay };
